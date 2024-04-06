from flask import Flask, request, jsonify
app = Flask(__name__)

# 这个列表用作示例的"数据库"，在实际应用中，你可能会使用一个真正的数据库来存储留言。
messages = []

@app.route('/message', methods=['POST'])
def post_message():
    # 从请求体中获取JSON数据
    message_data = request.json
    # 确保所有字段都存在
    if all(key in message_data for key in ('name', 'email', 'message')):
        # 将留言信息添加到列表（模拟的数据库）中
        messages.append({
            'name': message_data['name'],
            'email': message_data['email'],
            'message': message_data['message']
        })
        return jsonify({"status": "success", "message": "Message received"}), 200
    else:
        # 如果任何字段缺失，返回一个错误响应
        return jsonify({"status": "error", "message": "Missing data"}), 400

@app.route('/messages', methods=['GET'])
def get_messages():
    # 返回所有留言
    return jsonify(messages), 200

if __name__ == '__main__':
    app.run(debug=True, port=8000)
