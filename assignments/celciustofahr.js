while (true) {
    let input = prompt("Dereceyi görmek için 'f' Fahrenaytı görmek için 'c' giriniz. Çıkmak için niye girdin arkadaş! (-q-) ya bas bari...!" );    
    if(input==="c"){
        CeltoFah();        
    }
    else if (input==="f"){
        FahtoCel(); 
    } 
    else if(input ==="q"){
        console.log("güle güle");
        break;         
    }
    else{
        console.log("yanlış giriş yaptınız");
    }
}    
    function CeltoFah(){
        let giriş=prompt("Dereceyi giriniz ");
        let sonuç = (1.8 * giriş) + 32;
        console.log(`${giriş} Derece = ${sonuç.toFixed(2)} °F eder.`)
    }
    function FahtoCel(){
        let giriş=prompt("Fahrenaytı giriniz ");
        let sonuç = (giriş - 32) * 5/9;
        console.log(`${giriş} Fahrenayt = ${sonuç.toFixed(2)} °C eder.`)
    }
        