var dataEvento = prompt(" Informe a data do evento no formato DD/MM/AAAA");
var qtdParts = 89;
dataEvento = dataEvento.replaceAll('/','');
var data1 = dataEvento.substr(4,4)
var data2 = dataEvento.substr(2,2)
var data3 = dataEvento.substr(0,2)
var data = new Date();
var mDia = data.getDate() 
if (mDia < 10) {mDia = "0" + mDia }
var mMes = (data.getMonth() + 1)
if (mMes < 10) {mMes = "0" + mMes }
const hoje = (data.getFullYear() + '-' +  mMes + '-' + mDia).replaceAll("-","")
  if((data1+ data2 + data3) > hoje){
    var idade = prompt("Informe a sua idade ?");
    if(idade < 18){
        window.alert("Você não tem idade para participar do evento!   Você tem " + idade + " anos.");
    }else if(idade > 18 && qtdParts < 100){
        window.alert(` Concluído com sucesso!   Você tem ${idade} anos.`)
    }else {
        window.alert(` A quantidade de participantes já foi atingida.`)
    }
} 
else{
    window.alert(`Impossível cadastrar um evento para essa data!`)

}




