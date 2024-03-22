from flask import Flask, jsonify ,request

app = Flask(__name__)

user_responses=[]

@app.route('/get_response',methods=['GET'])
def get_response():
    return jsonify({'response': user_responses})



@app.route('/post_response',methods=['POST'])
def post_response():
    user_input=request.json.get('user_input','')

    if user_input:
        user_responses.append(user_input)
        print(user_responses)

    return '',204
    

if __name__ == '__main__':
    app.run(debug=True)