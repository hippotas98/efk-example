#### RUN
```javascript
docker-compose up --build
docker-compose up
```
#### Check number of nodes
```javascript
GET localhost:9200/_cat/nodes?v
```
#### Check index fluentd 
Dùng postman hoặc curl
```javascript
GET http://localhost:9200/<index_name>/_settings
```
Nếu number_of_replica >= 1, số node là 1 thì sửa số replica = 0
#### Edit number_of_replica
```javascript
PUT http://localhost:9200/<index_name>/_settings
```
Body
```javascript
{
	"index.number_of_replicas" : 0
}
```
#### Set default number_of_replica
```javascript
PUT http://localhost:9200/_template/template_1/
```
Body
```javascript
{
  "index_patterns": ["fluentd-*"],       
  "order": 3,                     
  "settings": {
    "number_of_replicas": 0
  }
}
```

#### Cách sửa không truy cập được localhost:9200
Sửa port của elasticsearch trong docker-compose thành "9200:9200"

#### Set mapping type cho template
Lưu ý, nếu có index (indices) của elasticsearch thì phải xoá đi. Nếu không thì put ko dc
```javascript
PUT http://localhost:9200/_template/template_1/
```
Body
```javascript
{
  "index_patterns": ["fluentd-*"], 
  "mappings": {
    "access_log" : {
      "properties": {
        "total_amount": {
          "type": "double"
        },
        "product_quantity": {
          "type": "double"
        }
      }
    }
  },
  "settings": {
    "number_of_replicas": 0
  }
}
```
#### Tạo index thủ công
```javascript
PUT http://localhost:9200/<index_name>
```

#### Set mapping type cho từng index
sử dụng khi template không set dc. Có thể làm hằng ngày trc khi chạy để elasticsearch map type
```javascript
PUT http://localhost:9200/<index_name>/_mapping/access_log 
```
Body
```javascript 
{
  "properties": {
    "total_amount": {
          "type": "double"
        },
        "product_quantity": {
          "type": "double"
        }
  }
}
```
#### Dump data
Làm theo https://github.com/taskrabbit/elasticsearch-dump
##### RUN
```javascript 
elasticdump \
  --input=http://localhost:9200/<index_name> \
  --output=<file-name>.json \
  --limit=1000 \
```

#### Import data
Làm theo https://github.com/taskrabbit/elasticsearch-dump
##### RUN
```javascript 
elasticdump \
  --input=<path-to-file-json> \
  --output=http://localhost:9200/<index_name> \
  --limit=1000 \
```
