'''
# Created: 10/9/2019
# Author:  Yasir Hussain (yaxirhuxxain@yahoo.com)
'''
import os, re
from flask import Flask, render_template, request, flash, jsonify
from models import LoadModel

app = Flask(__name__)
app.config.from_object(__name__)


folder = os.path.join('models','BiGRU') #put your pre-trained model here
LoadModelObject = LoadModel(folder) # Provide your load model class here
app.logger.warning(f"Model: {LoadModelObject.model}")

@app.route('/suggestion',methods=['GET'])
def suggestion():
    if request.method == 'GET':
        code = request.args.get("code")
        code = re.sub(r'\<\$\>'," ",code)
        #app.logger.warning('code: {}'.format(code))
        y_pred = LoadModelObject.suggest_next(code) # provide your suggestion function here
        app.logger.warning('y_pred: {}'.format(y_pred))

        return jsonify(y_pred)

@app.route('/completion',methods=['GET'])
def completion():
    if request.method == 'GET':
        code = request.args.get("code")
        code = re.sub(r'\<\$\>'," ",code)
        app.logger.warning('code: {}'.format(code))
        y_pred = LoadModelObject.completion_next(code) # provide your completion function here
        app.logger.warning('y_pred: {}'.format(y_pred))

        return jsonify(y_pred)


if __name__=='__main__':
    app.run(debug=False, host="0.0.0.0", port="80")
