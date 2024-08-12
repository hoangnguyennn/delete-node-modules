# delete-node-modules

Một công cụ đơn giản dùng để xóa `node_modules`

## Sử dụng

Cài đặt delete-node-modules:

```bash
$ npm i
$ npm i -g .
```

Sử dụng:

```bash
# `.` là folder hiện tại
# delete-node-modules sẽ tìm tất cả những folder node_modules bên trong folder hiện tại
$ delete-node-modules .

# cũng có thể sử dụng cú pháp ngắn gọn
$ dnm .
```

## CLI Option

CLI syntax:

```bash
$  delete-node-modules <source>
```

Bạn cũng có thể xem các tùy chọn được hỗ trợ bằng lệnh sau:

```bash
$  delete-node-modules --help
```
