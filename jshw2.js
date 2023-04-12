//Task 1
// const getNam = prompt ('Введите имя')
// const getFamily = prompt ('Введите фамилию')
// const getNickname = prompt ('Введите никнейм')
// if ( getNam!=null && getFamily!=null && getNam!='' && getFamily!=''){
//     alert ('Добро пожаловать, '+getNam+' '+getFamily+'!') 
// }else if ((getNam===null || getNam==='') && getFamily!=null && getNickname!=null && getFamily!='' && getNickname!=''){
//     alert ('Добро пожаловать, '+getNickname+'!')
// }else if (getNam!=null && (getFamily===null||getFamily==='') && getNickname!=null && getNam!='' && getNickname!=''){
//     alert ('Добро пожаловать, '+getNam+'!')
// }else if (getNam!=null && getNam!='' && (getFamily===null||getFamily==='') && (getNickname===null || getNickname==='')){
//     alert ('Добро пожаловать, '+getNam+'!')
// }else if (getNam===null && getFamily===null && getNickname===null || getNam==='' && getFamily==='' && getNickname===''){
//     alert ('Добро пожаловать, Noname!')
// }else if ((getNam===null||getNam==='') && getFamily!=null &&  getFamily!='' && (getNickname===null || getNickname==='')){
//     alert ('Добро пожаловать, Noname!')
// } else if ((getNam===null||getNam==='') && (getFamily!=null || getFamily!='') && getNickname!=null && getNickname!=''){
//     alert ('Добро пожаловать, Noname!')}

//Task 2
// const getNum = prompt ('Введите число')
// let getHundred=''
// let Even=''
// let Plus=''
// let Whole=''
// if (isNaN(+getNum)) {
//     alert ('Вы ввели НЕ ЧИСЛО')
// }else{
// if (getNum==='' || getNum===null){
//     alert ('Вы не ввели число')
// }else if (+getNum>100){
//     getHundred='больше ста,'
// }else if(+getNum<100){
//     getHundred='меньше ста,' 
// }else if (+getNum===100){
//     getHundred='сто,'}
// if (getNum%2===0){
//     Even='четное,' 
// }else if (+getNum%2!==0){
//     Even='нечетное,'}
// if (+getNum >0){
//     Plus='положительное,'
// }else if (+getNum < 0){
//     Plus='отрицательное,'
// }else if (+getNum === 0){
//     Plus='ноль,'}
// if (+getNum%1 === 0){
//     Whole='целое.'
// }else if  (+getNum%1 !== 0){
//     Whole='дробное.'}
// alert (`Введенное Вами число ${getHundred} ${Even} ${Plus} ${Whole}`)}


// // //Task 3
// let numberone = prompt('Введите первое число')
// let numbertwo
// (numberone===null || numberone==='')? alert ('Вы не ввели первое число'): 
// (numbertwo=prompt ('Введите второе число'), numbertwo===null || numbertwo==='')? alert ('Вы не ввели второе число'):
// alert (+numberone+ +numbertwo);


// Task 4
// let Name = prompt('Введите Ваше имя')
// let Age
// (Name===null || Name==='')? alert ('Вы не ввели Ваше имя'): 
// (Age=prompt ('Введите второе число'), Age===null || Age==='')? alert ('Вы не ввели Ваш возраст'):
// (Age=18)? alert ('Добро пожаловать, '+Name+'!'):
// alert ('Извините, ' + Name + 'доступ закрыт!')

// // Task 5
// const getNumb= prompt ('Введите число от 0 до 9')
// switch(true){
// case (getNumb==='' || getNumb===null):
//     alert ('Вы не ввели число')
//     break
// case (+getNumb===0 && getNumb!=='' &&  getNumb!==null):
//     alert ('ноль')
// break
// case (+getNumb===1):
//     alert ('один')
// break
// case (+getNumb===2):
//     alert ('два')
// break
// case (+getNumb===3):
//     alert ('три')
// break
// case (+getNumb===4):
//     alert ('четыре')
// break
// case (+getNumb===5):
//     alert ('пять')
// break
// case (+getNumb===6):
//     alert ('шесть')
// break
// case (+getNumb===7): 
//     alert ('семь')
// break
// case (+getNumb===8):
//     alert ('восемь')
// break
// case (+getNumb===9):
//     alert ('девять')
// break
// case(getNumb>9 || getNumb<0):
// alert ('Ваше число не входит в заданный диапазон')
// break
// case(isNaN(+getNumb)):
// alert ('Вы ввели НЕ ЧИСЛО')
// break
// }
