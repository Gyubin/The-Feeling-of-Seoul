# d3.js Force Layout 데이터 만들기

force layout에 맞는 데이터를 파이썬으로 만들어봤다.

## 1. 데이터

R을 활용해 국가별 리뷰에서 연관성 있는 단어를 뽑아보았다. csv로 저장했을 때 연관되는 부분이 컬럼으로 구분되지 않고 rules라는 컬럼에 문자열 형태로 들어갔기 때문에 정제가 필요했다. confidence 순으로 0.9 이상인 것만 드래그로 긁어서 복사해서 아래처럼 문자열 형태로 저장했다.

```py
my_str = """
{slip} => {time}, {eight} => {kitamura}, {guest} => {house}, {sonata} => {winter}, {school,sonata} => {winter}, 
{school,winter} => {sonata}, {high,sonata} => {school}, {high,sonata} => {winter}, {high,winter} => {sonata}, 
{high,winter} => {school}, {quiet,residential} => {area}, {residential,tourist} => {area}, 
{residential,seoul} => {area}, {kitamura,south} => {korea}, {come,south} => {korea}, {south,such} => {korea}, 
{building,south} => {korea}, {hill,south} => {korea}, {feel,south} => {korea}, {south,think} => {korea}, 
{people,south} => {korea}, {south,street} => {korea}, {south,tourist} => {korea}, {south,walk} => {korea}, 
{high,school,sonata} => {winter}, {high,sonata,winter} => {school}, {high,school,winter} => {sonata}, 
{house,residential,walk} => {area}, {place,south,walk} => {korea}, {find,hanok,village} => {bukchon}, 
{area,look,traditional} => {house}, {area,korean,tourist,traditional} => {house}, 
{area,tourist,traditional,walk} => {house}
"""
```

## 2. 데이터 다루기

### 2.1 우선 필요한 json 데이터 형태는 다음과 같다.

```js
{
  nodes: [
    { name: "Adam" },
    { name: "Bob" },
    { name: "Carrie" },
  ],
  edges: [
    { source: 0, target: 1 },
    { source: 0, target: 2 },
    { source: 0, target: 3 },
  ]
};
```

### 2.2 문자열 정제

위 1번의 `my_str` 문자열을 활용했다.

```py
import re
import json
def make_unique_words(s):
    temp = set(re.findall(r'\w+', str))
    return [{'name':word } for word in temp]
    
def make_edges(i, s, dataset):
    REGEX = re.compile(r'[{](.+?)[}] => [{](.+?)[}]')
    parent = REGEX.search(s).group(2) # String
    childs = REGEX.search(s).group(1).split(',') # List
    parent_index = dataset['nodes'].index({'name': parent})
    for child in childs:
        child_index = dataset['nodes'].index({'name': child})
        tmp_dict = {'source': child_index, 'target': parent_index, 'entity':i}
        dataset['edges'].append(tmp_dict)
    return dataset

dataset = {}

nodes = make_unique_words(my_str)
dataset['nodes'] = nodes

dataset['edges'] = []
my_str = re.sub(r'\n', '', my_str)
cor_list = my_str.split(', ')
for i, s in enumerate(cor_list):
    dataset = make_edges(i, s, dataset)

with open('./bukchon_fl.json', 'w', encoding='utf-8') as f:
    f.write(json.dumps(dataset, ensure_ascii=False))
```

- `make_unique_words(str)` : 정규표현식으로 문자만 모두 찾아서 set 데이터타입화했다. 그리고 dict형태로 바꾸어 리턴했다.
- `make_edges(i, s, dataset)` : edges를 만드는 함수다.
    + 정규표현식으로 왼쪽과 오른쪽의 `{ }` 안에 들어있는 문자열들을 그룹핑을 활용해 모두 선택했다. 우측이 parent, 좌측이 child다.
    + 리스트의 index 함수를 활용해서 parent의 인덱스를 for 반복 들어가기 전에 구해놓는다. 함수 전체에서 동일하기 때문에 그렇다.
    + child를 하나하나 반복 돌아서 같은 방법으로 nodes에서의 인덱스를 구하고 dict로 만든다. 여기서 entity 부분이 추가로 들어가는데 실제로 보여줄 때 연관성 분석된 한 행씩을 선택하기 위한 방법이다. 그래야 노드에 마우스를 over했을 때 그 entity만 보여줄 수 있다.
- my_str 정제: 여러 줄로 된 문자열이라서 개행문자를 제거하고 `, ` 기준으로 나눈다. 나눈 것의 하나하나를 make_edges 함수에 넣어서 결과를 만든다.
- 마지막에 json 파일로 만든다.
