from flask import Flask, request, jsonify
from flask_cors import CORS
import json
app = Flask(__name__)
CORS(app)

messages = []

def save_message(new_message):
    messages.append(new_message)
    with open('messages.json', 'w', encoding='utf-8') as file:
        json.dump(messages, file, indent=4)

@app.route('/message', methods=['POST'])
def post_message():
    message_data = request.json
    # 确保所有字段都存在
    if all(key in message_data for key in ('name', 'email', 'message')):
        save_message({
            'name': message_data['name'],
            'email': message_data['email'],
            'message': message_data['message']
        })
        return jsonify({"status": "success", "message": "Message received"}), 200
    else:
        return jsonify({"status": "error", "message": "Missing data"}), 400

@app.route('/messages', methods=['GET'])
def get_messages():
    # 返回所有留言
    return jsonify(messages), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)
