 angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope){
        $scope.app="Lista Telefonica";
        $scope.contatos= [
          {nome:"Jose", telefone:"12345678", cor: "red", data: new Date(), operadora:{nome:"Oi", codigo:14, categoria: "Celular"}},
          {nome:"Ana", telefone:"98765432", cor: "blue", data: new Date(), operadora:{nome:"Vivo", codigo:15, categoria: "Celular"}},
          {nome:"Pedro", telefone:"12122323", cor: "green", data: new Date(), operadora:{nome:"GVT", codigo:25, categoria: "Fixo"}},
        ];
        $scope.operadoras = [
          {nome:"Oi", codigo:14, categoria: "Celular", preco: 1},
          {nome:"Vivo", codigo:15, categoria: "Celular", preco: 2},
          {nome:"Tim", codigo:41, categoria: "Celular", preco: 3},
          {nome:"GVT", codigo:25, categoria: "Fixo", preco: 1},
          {nome:"Embratel", codigo:21, categoria: "Fixo", preco: 14}
        ]

        $scope.adicionarContato= function(contato){
          $scope.contatos.push(contato);
          delete $scope.contato;
          $scope.contatoForm.$setPristine();
        };
        $scope.classe="selecionado";
        $scope.apagarContatos = function(contatos){
          $scope.contatos = contatos.filter(function(contato){
            if(!contato.selecionado) return contato;
          });

        }

      $scope.isContatoSelecionado = function(contatos){
        return contatos.some(function(contato){
            return contato.selecionado;
          });
      };

      $scope.ordenaPor = function(campo){
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
      };
    });