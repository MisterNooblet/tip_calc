const tipRange = document.querySelector('#tip-range');
const splitRange = document.querySelector('#splitRange');
const billTotal = document.querySelector("#billTotal");
const tipTop = document.querySelector("#tipTop");

//DOM Txt's
const tipNum = document.querySelector('#tipNum');
const splitNum = document.querySelector('#splitNum');
const tipAndBill = document.querySelector('#tipAndBill');
const tipBottom = document.querySelector('#tipBottom');
const splitBills = document.querySelector('#splitBills');

//Variables
let tipPercent = 0.01
let splitPeople = 1
let bill = 0

//Event listeners
tipRange.addEventListener('input', function () {


    if (this.value < 10) {
        tipPercent = Number(`0.0${this.value}`)

    } else {
        tipPercent = this.value * 0.01
    }
    tipNum.innerHTML = `${this.value}%`
    calcExpenses()
})

splitRange.addEventListener('input', function () {
    splitPeople = this.value
    splitNum.innerHTML = `${splitPeople}`
    calcExpenses()
})

billTotal.addEventListener('input', function () {
    bill = Number(this.value)
    console.log(bill);
    calcExpenses()
})

//calc expenses function
function calcExpenses() {
    let totalExpense = bill + (bill * tipPercent)
    let tip = bill * tipPercent
    let splitTip = tip / splitPeople
    let splitBill = totalExpense / splitPeople
    updateTip(tip)
    updateTipandBill(totalExpense)
    updateTipSplit(splitTip)
    updateBillSplit(splitBill)

}

//ui update functions

function updateTip(value) {
    tipTop.innerHTML = `${value.toFixed(2)}`
}
function updateTipandBill(value) {
    tipAndBill.innerHTML = `${value.toFixed(2)}`
}
function updateTipSplit(value) {
    tipBottom.innerHTML = `${value.toFixed(2)}`
}
function updateBillSplit(value) {
    splitBills.innerHTML = `${value.toFixed(2)}`
}




///TESTTTTTTTTTTTTTTTTTTTTTTTTTTT

let suggestions = [
    "Channel",
    "CodingLab",
    "CodingNepal",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to became Freelancer",
    "How to became Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
];

let suggestions2 = [
    {
        name: 'Argentina',
        tip: 10,
        msg: `10% is a common tipping practice in Argentina.`
    },
    {
        name: 'Armenia',
        tip: 10,
        msg: `10% is a common tipping practice in Armenia.`
    },
    {
        name: 'Australia',
        tip: 10,
        msg: `10% is a common tipping practice  in fine restaurants only in Australia.`
    },
    {
        name: 'Austria',
        tip: 5,
        msg: `5% above service charge is a common tipping practice  in  Austria.`
    },
    {
        name: 'Azerbaijan',
        tip: 10,
        msg: `10% is a common tipping practice in Azerbaijan.`
    },
    {
        name: 'Bahamas',
        tip: 10,
        msg: `10% is a common tipping practice in Bahamas.`
    },
    {
        name: 'Bahrain',
        tip: 10,
        msg: `10% is a common tipping practice in Bahrain.`
    },
    {
        name: 'Belgium',
        tip: 10,
        msg: `10% is a common tipping if there is no service charge in Belgium.`
    },
    {
        name: 'Bolivia',
        tip: 10,
        msg: `10% is a common tipping practice in Bolivia.`
    },
    {
        name: 'Brazil',
        tip: 10,
        msg: `10% - 15% is a common tipping practice in Brazil.`
    },
    {
        name: 'Brunei',
        tip: 10,
        msg: `There is a common tipping practice in Brunei.`
    },
    {
        name: 'Bulgaria',
        tip: 10,
        msg: `10% is a common tipping practice in Bulgaria.`
    },
    {
        name: 'Canada',
        tip: 15,
        msg: `15% is a common tipping practice in Canada.`
    },
    {
        name: 'Cayman Isles',
        tip: 15,
        msg: `15% is a common tipping practice if there is no service charge in Cayman Isles.`
    },
    {
        name: 'Chile',
        tip: 10,
        msg: `10% is a common tipping practice in addition to service charge in Chile.`
    },
    {
        name: 'China',
        tip: 3,
        msg: `3% is a common tipping practice in major cities of China.`
    },
    {
        name: 'Colombia',
        tip: 10,
        msg: `10% is a common tipping practice in Colombia.`
    },
    {
        name: 'Costa Rica',
        tip: 0,
        msg: `Tipping is uncommon in Costa Rica.`
    },
    {
        name: 'Cuba',
        tip: 1,
        msg: `1% is a common tipping practice for special service in Cuba.`
    },
    {
        name: 'Czech Rep',
        tip: 5,
        msg: `5% - 10% is a common tipping practice in Czech Rep.`
    },
    {
        name: 'Denmark',
        tip: 0,
        msg: `Tipping is uncommon in Denmark.`
    },
    {
        name: 'Ecuador',
        tip: 10,
        msg: `10% is a common tipping if there is no service charge in Ecuador.`
    },
    {
        name: 'Egypt',
        tip: 5,
        msg: `5% - 10% on top of service charge is a common tipping practice in Egypt.`
    },
    {
        name: 'England',
        tip: 10,
        msg: `10% is a common tipping if there is no service charge in England.`
    },
    {
        name: 'Fiji',
        tip: 0,
        msg: `Tipping is uncommon in Fiji.`
    },
    {
        name: 'Finland',
        tip: 10,
        msg: `10% is a common tipping if there is no service charge in Finland.`
    },
    {
        name: 'France',
        tip: 5,
        msg: `5% - 10% is a common tipping practice in France.`
    },
    {
        name: 'Germany',
        tip: 5,
        msg: `5% - 10% is a common tipping practice in Germany.`
    },
    {
        name: 'Greece',
        tip: 5,
        msg: `5% - 10% on top of service charge is a common tipping practice in Greece.`
    },
    {
        name: 'Guatemala',
        tip: 5,
        msg: `5% - 10% on top of service charge is a common tipping practice in Guatemala.`
    },
    {
        name: 'Holland',
        tip: 5,
        msg: `5% - 10% is a common tipping practice in Holland.`
    },
    {
        name: 'Hong Kong',
        tip: 5,
        msg: `5% - 10% on top of service charge is a common tipping practice in Hong Kong.`
    },
    {
        name: 'Hungary',
        tip: 10,
        msg: `10% is a common tipping if there is no service charge in Hungary.`
    },
    {
        name: 'Iceland',
        tip: 10,
        msg: `10% is a common tipping if there is no service charge in Iceland.`
    },
    {
        name: 'India',
        tip: 10,
        msg: `10% is a common tipping if there is no service charge in India.`
    },
    {
        name: 'Indonesia',
        tip: 10,
        msg: `10% is a common tipping practice in Indonesia.`
    },
    {
        name: 'Ireland',
        tip: 10,
        msg: `10% - 15% is a common tipping practice in Ireland.`
    },
    {
        name: 'Israel',
        tip: 10,
        msg: `10% - 12% is a common tipping if there is no service charge in Israel.`
    },
    {
        name: 'Italy',
        tip: 10,
        msg: `10% on top of service charge is a common tipping practice in Italy.`
    },
    {
        name: 'Japan',
        tip: 0,
        msg: `⛔Tipping is perceived as insulting in Japan!⛔`
    },
    {
        name: 'Kenya',
        tip: 5,
        msg: `5% is a common tipping if there is no service charge in Kenya.`
    },
    {
        name: 'Luxembourg',
        tip: 5,
        msg: `5% - 10% is a common tipping practice in Luxembourg.`
    },
    {
        name: 'Macao',
        tip: 5,
        msg: `5% - 10% on top of service charge is a common tipping practice in Macao.`
    },
    {
        name: 'Madagascar',
        tip: 10,
        msg: `10% is a common tipping practice in Madagascar.`
    },
    {
        name: 'Malaysia',
        tip: 0,
        msg: `Tipping is uncommon in Malaysia.`
    },
    {
        name: 'Mexico',
        tip: 10,
        msg: `10% - 15% is a common tipping practice in Mexico.`
    },
    {
        name: 'Morocco',
        tip: 1,
        msg: `Leave loose change in Morocco.`
    },
    {
        name: 'New Zealand',
        tip: 0,
        msg: `Tipping is uncommon in New Zealand.`
    },
    {
        name: 'Nicaragua',
        tip: 10,
        msg: `10% is a common tipping practice for special service in Nicaragua.`
    },
    {
        name: 'Norway',
        tip: 10,
        msg: `10% is a common tipping if there is no service charge in Norway.`
    },
    {
        name: 'Oman',
        tip: 0,
        msg: `Tipping is uncommon in Oman.`
    },
    {
        name: 'Paraguay',
        tip: 10,
        msg: `10% is a common tipping practice in Paraguay.`
    },
    {
        name: 'Peru',
        tip: 10,
        msg: `Up to 10% is a common tipping practice for special service in Peru.`
    },
    {
        name: 'Philippines',
        tip: 10,
        msg: `10% is a common tipping practice in Philippines.`
    },
    {
        name: 'Poland',
        tip: 10,
        msg: `10% is a common tipping practice in Poland.`
    },
    {
        name: 'Portugal',
        tip: 10,
        msg: `10% - 15% is a common tipping if there is no service charge in Portugal.`
    },
    {
        name: 'Romania',
        tip: 0,
        msg: `It is common to round up the bill in Romania.`
    },
    {
        name: 'Russia',
        tip: 10,
        msg: `10% - 15% is a common tipping practice in Russia.`
    },
    {
        name: 'Samoa',
        tip: 0,
        msg: `Tipping is uncommon in Samoa.`
    },
    {
        name: 'Saudi Arabia',
        tip: 10,
        msg: `10% - 15% is a common tipping practice in Saudi Arabia.`
    },
    {
        name: 'Scotland',
        tip: 10,
        msg: `10% - 15% is a common tipping if there is no service charge in Scotland.`
    },
    {
        name: 'Singapore',
        tip: 0,
        msg: `Tipping is uncommon in Singapore.`
    },
    {
        name: 'South Africa',
        tip: 10,
        msg: `10% is a common tipping if there is no service charge in South Africa.`
    },
    {
        name: 'South Korea',
        tip: 0,
        msg: `Tipping is uncommon in South Korea.`
    },
    {
        name: 'Spain',
        tip: 7,
        msg: `7% - 10% on top of service charge is a common tipping practice in Spain.`
    },
    {
        name: 'Sweden',
        tip: 10,
        msg: `10% is a common tipping if there is no service charge in Sweden.`
    },
    {
        name: 'Switzerland',
        tip: 0,
        msg: `It is common to round up the bill in Switzerland.`
    },
    {
        name: 'Taiwan',
        tip: 10,
        msg: `10% is a common tipping if there is no service charge in Taiwan.`
    },
    {
        name: 'Tanzania',
        tip: 10,
        msg: `10% is a common tipping practice in Tanzania.`
    },
    {
        name: 'Thailand',
        tip: 0,
        msg: `Tipping is uncommon in Thailand.`
    },
    {
        name: 'Turkey',
        tip: 0,
        msg: `It is common to round up the bill in Turkey.`
    },
    {
        name: 'Ukraine',
        tip: 10,
        msg: `10% is a common tipping practice in Ukraine.`
    },
    {
        name: 'United Arab Emirates',
        tip: 0,
        msg: `Tipping is uncommon in United Arab Emirates.`
    },
    {
        name: 'United States',
        tip: 15,
        msg: `15% - 20% is a common tipping practice in United States.`
    },
    {
        name: 'Venezuela',
        tip: 10,
        msg: `10% is a common tipping practice in Venezuela.`
    },
    {
        name: 'Vietnam',
        tip: 0,
        msg: `Tipping is uncommon in Vietnam.`
    },
    {
        name: 'Wales',
        tip: 10,
        msg: `10% is a common tipping if there is no service charge in Wales.`
    },

]

// getting all required elements
const searchInput = document.querySelector(".searchInput");
const input = searchInput.querySelector("input");
const resultBox = searchInput.querySelector(".resultBox");
const icon = searchInput.querySelector(".icon");
let linkTag = searchInput.querySelector("a");
let webLink;

let emptyArray = [];
// if user press any key and release
// input.onkeyup = (e) => {
//     let userData = e.target.value; //user enetered data
//     if (userData) {
//         emptyArray = suggestions2.filter((data) => {
//             //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
//             return data.name.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
//         });
//         emptyArray = emptyArray.map((data) => {
//             // passing return data inside li tag
//             return data.name = '<li>' + data.name + '</li>';
//         });
//         searchInput.classList.add("active"); //show autocomplete box
//         showSuggestions(emptyArray);
//         let allList = resultBox.querySelectorAll("li");
//         for (let i = 0; i < allList.length; i++) {
//             //adding onclick attribute in all li tag
//             allList[i].setAttribute("onclick", "select(this)");
//         }
//     } else {
//         searchInput.classList.remove("active"); //hide autocomplete box
//     }
// }

input.addEventListener('keyup', (e) => {
    let results = []
    results = suggestions2.filter((country) => country.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
    console.log(results);
    showSuggestions(results)
})
function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = input.value;
        listData = '<li>' + userValue + '</li>';
    } else {
        listData = list.join('');
    }
    resultBox.innerHTML = listData;
}