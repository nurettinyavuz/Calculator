const userInput = document.getElementById("user_input");

/*expression tanımladık çünkü aşağıdaki işlemleri bunun üzerinden yapacak
Örneğin kullanıcı function press'de 3girdi onu direkt expression'a gönderecek
+ yazdı onu da expression'a gönderecek.  
*/
var expression='';

function press(num){
    /*Kullanıcıdan num ile değerleri alıyoruz sayı veya işlemleri 
    sonra o değerleri expression'a gönderiyoruz.
    */
    expression += num;
    /*Kullanıcı değeri aldıktan sonra tekrarden değer alma kısmına gönderiyoruz
    ve sayı mı yoksa işlem mi girecek tekrar fırsat veriyoruz
    */
    userInput.value = expression;
}

function equal(){
    /*eval özel bir fonksiyondur.
    Örneğin kullanıcı 3+3 diyecek,eşittire basacak ve eval fonksiyonunun içindeki değeri 
    otomatik hesaplayacak.Sonra ise "userInput" dediğimiz giriş kutusuna yazacak
    */
    userInput.value=eval(expression);
    expression='';
}

function erase(){
    expression = "";
    userInput.value = expression;
  }