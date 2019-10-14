#### RUN
```javascript
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
