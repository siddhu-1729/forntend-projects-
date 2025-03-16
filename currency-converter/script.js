let base_url="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"//usd.min.json";  
const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");

const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };
  // for( let code in countryList){
  //   console.log(countryList[code]);
  // }

  for(let select of dropdowns){
    for(code in countryList){
        let newoption = document.createElement("option");
        newoption.innerText=code;
        newoption.value=code;   
        if(select.name==="from" && code==="USD"){
            newoption.selected="selected";
         }//select.append(newoption);
       else if(select.name==="to" && code==="INR"){
            newoption.selected="selected";
        }
        select.append(newoption);
    }
    select.addEventListener("change",(evt)=>{
         updateflag(evt.target);
    });
  }

  const updateflag =(element)=>{
       let code=element.value;
       
    // console.log(code);
    let countrycode=countryList[code];
    let newSrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
  };
  
//   async function getRate(fromCurr,toCurr) {
//     // This url will give you currencies UDS/XXX
//     const url = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.min.json'

//     // Fetch data and get INR rate
//     const inr = await fetch(url)
//         .then(response => response.json())
//         .then(data => data[fromCurr].toCurr)

//     return inr;
// }
let updateExchangeRate = async () =>{
  let amount=document.querySelector(".amount input");
  let amountval=amount.value;
  // console.log(amountval);

  if(amountval==="" || amountval < 1){
     amountval=1;
     amount.value="1";
  }
  const URL = `${base_url}/${fromCurr.value.toLowerCase()}.min.json`;///${toCurr.value.toLowerCase()}.json`;

  let response = await fetch(URL);
   let data = await response.json();

   let from = fromCurr.value.toLowerCase();
// console.log(from);
let to = toCurr.value.toLowerCase();
// console.log(to);

let rate = data[from][to];
let finalamount=amountval*rate;

msg.innerText =`${amountval} ${fromCurr.value}=${finalamount} ${toCurr.value}`;
};


btn.addEventListener("click", async (evt)=>{
     evt.preventDefault();
    //  let amount=document.querySelector(".amount input");
    //   let amountval=amount.value;
    //   console.log(amountval);

    //   if(amountval==="" || amountval < 1){
    //      amountval=1;
    //      amount.value="1";
    //   }
        // console.log(fromCurr.value,toCurr.value);
      // const URL=`${base_url}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;   //API's works in Lower letters only
     // let json = fetch(URL);
      //  let response=await fetch(URL);
      //  console.log(response);
      //  let data=await response.json();
      //data[toCurr.value.toLowercase()];

       
      
      // msg.innerText=`${amountval} ${fromCurr.value}=${finalamount} ${toCurr.value}`;

      updateExchangeRate();
});

window.addEventListener("load",() => {
  updateExchangeRate();
  });