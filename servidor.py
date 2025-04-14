from flask import *

#instanciando o servidor flask
app = Flask(__name__)

@app.route('/')
def pagina_principal():
    return render_template('index.html')

@app.route('/sugestaonome', methods=['POST','GET'])
def receber_nome_porco():
    #se for via método get, use isso
    outronome = request.values.get('nomeporco')

    #se for via post, use isso
    nome_porquinho = request.form.get('nomeporco')

    print(nome_porquinho)
    return 'ok'

app.run()