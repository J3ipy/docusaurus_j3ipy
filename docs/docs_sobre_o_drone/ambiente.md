---
sidebar_position: 1
---

# Ambiente de Desenvolvimento 

Provavelmente você está com um projeto que envolve o drone Tello ou apenas teve curiosidade e começou a "reinar" sobre o mesmo.

O Tello é um drone compacto que suporta linguagens de programação como Matlab, Python e Scratch!

## Python

Para programar alguma rotina com o Tello com python primeiramente precisamos baixar o [Python](https://www.python.org/downloads/) (todos os projetos que eu desenvolvi foram feitos com a versão 3.12.5).

Após a instalação ser concluída abra o cmd e escreva "python --version" para conferir se a instalação foi feita corretamente.

```bash
python --version
```

O ideal para escrever o código é um editor de texto qualquer, pode ser o [Visual Studio Code](https://code.visualstudio.com/Download), [Notepad++](https://notepad-plus-plus.org/downloads/), entre outros.

Com o editor de texto instalado crie uma nova pasta no diretório que você desejar, eu recomendo em Documentos ou Downloads, após a criação da pasta, abra o editor de texto e vá até "Arquivo" ou "File" e selecione a opção "Abrir Pasta" ou "Open Folder", pronto!

A pasta vai está aberta no seu editor de texto, clique em "Novo arquivo" e digite um nome para seu arquivo "main.py". Para confirmamos que o python está instalado novamente, digite o seguinte comando no seu arquivo:

```python
print('hello world!')
```

E execute seu arquivo!... Pronto, irá aparecer uma mensagem no terminal/console com a frase que você acabou de escrever:
```python
hello world!
```

O Tello possui uma gama vasta de aplicações, porém, começaremos no básico.

Se estiver utilizando o Visual Studio Code, abra um novo terminal e instale algumas depêndencias.

```python
pip install djitellopy
```

Essa é a biblioteca que usaremos para fazer alguns exemplos básicos.