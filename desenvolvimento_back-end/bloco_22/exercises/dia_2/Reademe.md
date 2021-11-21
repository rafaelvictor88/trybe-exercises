Agora a prática
Vamos juntar tudo o que aprendemos até aqui e exercitar mais ainda nosso aprendizado!
Exercício 1 :
Vamos aprimorar nossos conhecimentos sobre imagens.
Para isso:
Crie um arquivo HTML chamado missao_trybe.html que tenha a seguinte estrutura: 1.1. Tag <title> com o seguinte texto "Trybe"; 1.2. Tag <H1> com o seguinte texto "Missão da Trybe"; 1.3. Tag <p> com o seguinte texto "Gerar oportunidade para pessoas"; 1.4. Salve o arquivo em qualquer lugar da sua máquina com a extensão html
Crie um container para manter um servidor httpd:2.4 Apache e vincule sua porta interna com a porta 4545 da sua máquina local.
Após criar o container acesse a página HTML que está rodando no servidor em seu browser.
Acesse o arquivo missao_trybe.html e acrescente a tag <p> com o seguinte texto "Nosso negócio é GENTE! #VQV";
Obtenha o id do container httpd:2.4 ;
Obtenha o Mounts através da propriedade Source que deve mostrar o volume desse container no Docker Host ;
Agora pare o container httpd:2.4 ;
Exclua o seu container;
Verifique se a pasta onde você salvo o arquivo html permanece no mesmo lugar;
Obtenha o IMAGE ID do servidor;
Depois de obter o IMAGE ID , exclua a imagem.
Exercício 2 :
Vamos usar uma imagem disponível no DockerHub conhecida como "cowsay" (Uma vaca falante no terminal 🐮!) !
A ideia é deixarmos a mensagem para o cowsay parametrizável, dessa forma, conseguiremos executar o comando:
Copiar
    docker container run cowsay Muuuuuuhhh
E ter a seguinte saída no terminal:
Copiar
____________
< Muuuuuuhhh >
------------
         \   ^__^
         \  (oo)\_______
            (__)\       )\/\
               ||----w |
               ||     ||
Para isso:
Crie um Dockerfile utilizando a imagem chuanwen/cowsay .
Agora defina um ENTRYPOINT para a execução do comando.
Lembre-se que com ele, diferente do CMD o comando não poderá ser sobrescrito com o docker run , porém, conseguiremos passar parâmetros ao binário, exploraremos esse recurso para poder passar a mensagem.
Utilize o CMD para definir uma mensagem padrão.
Gere uma build e execute um container baseado em sua imagem sem passar nenhum comando.
Agora execute um novo container passando sua mensagem para testar, além da mensagem você pode utilizar a opção -l para listar outros personagens disponíveis e então executar algo como docker container run cowsay -f dragon-and-cow "VQM TRYBE" , para exibir um dragão junto com a vaquinha.
