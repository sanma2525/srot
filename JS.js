//現在の持ち金
var money_num = 100000;
//阿部寛コレクション
var abe_image_collection = [0,0,0,0,0,0,0];

//現在の確変状況
var kakuhen = false;
//現在の確変継続可能回数
var kakuhen_num = 0;
//確変の継続回数にプラスされる数
const kakuhen_keizoku = 20;

//確変する確率
const kakuhen_kakuritu = 100;
//確変中のガチャ確率
const kakuhen_yami_kakuritu = 100;
//ノーマルガチャの通常時の確率
const kakuritu = 800;
//闇ガチャの通常時の確率
const yami_kakuritu = 600;

//ノーマルガチャのコスト
const cost = 50;
//闇ガチャのコスト
const yami_cost = 1500;
//あたりの配当
const plus_R = 20000;
//大当たりの配当
const plus_SR = 50000;
//SSRの配当
const plus_SSR = 100000;
//闇ガチャの配当倍率
const yami_bai = 1.5;

const mission1_term=500000;
const mission2_term=1000000;
const mission3_term=5000000;
const mission4_term=10000000;

var mission1_flag =false;
var mission2_flag =false;
var mission3_flag =false;
var mission4_flag =false;


//カウンター
var couneter= 0;


const background = document.getElementById('background');
//現在7
const abe_image= [
'<h1 style="style="display: inline-block; _display: inline;">ハズレ！</h1><img src="hato.png" style="width:300px; hight:500px;"></img>',
'<h1 style="style="display: inline-block; _display: inline;">R！</h1><img src="abe.png" style="width:300px; hight:500px;"></img>',
'<h1 style="style="display: inline-block; _display: inline;">R！</h1><img src="abe2.png" style="width:300px; hight:500px;"></img>',
'<h1 style="style="display: inline-block; _display: inline;">R！</h1><img src="abe3.png" style="width:300px; hight:500px;"></img>',
'<h1 style="style="display: inline-block; _display: inline;">SR！！若き頃の阿部寛</h1><img src="abe_wakai.png" style="width:300px; hight:500px;"></img>',
'<h1 style="style="display: inline-block; _display: inline;">SR！！金の阿部寛</h1><img src="abe_kin.png" style="width:300px; hight:500px;"></img>',
'<h1 style="style="display: inline-block; _display: inline;">SSR！！！幻の阿部寛</h1><img src="abe_niji.png" style="width:300px; hight:500px;"></img>'
];
var slot1_img ="";
var random = 0;

function cheat_money(){
	money_num+=100000;
};

function check_missions(){
var mission1 = document.getElementById('mission1');
var mission2 = document.getElementById('mission2');
var mission3 = document.getElementById('mission3');
var mission4 = document.getElementById('mission4');

	if(money_num > mission1_term && mission1_flag == false){
		mission1.innerHTML="☑"+mission1_term+"円集める";
		money_num += mission1_term / 10;
		mission1_flag=true;
		return;
	}
	if(money_num > mission2_term && mission2_flag == false){
		mission2.innerHTML="☑"+mission2_term+"円集める";
		money_num += mission2_term / 10;
		mission2_flag=true;
		return;
	}
	if(money_num > mission3_term && mission3_flag == false){
		mission3.innerHTML="☑"+mission3_term+"円集める";
		money_num += mission3_term / 10;
		mission3_flag=true;
		return;
	}
	if(money_num > mission4_term && mission4_flag == false){
		mission4.innerHTML="☑"+mission4_term+"円集める";
		money_num += mission4_term / 10;
		mission4_flag=true;
		return;
	}
}

function kakuhen_check(){
	if(money_num<0){
	var kakuhen_random = Math.floor( Math.random() * (kakuhen_kakuritu * (money_num /200000)));
	}else{
	var kakuhen_random = Math.floor( Math.random() * kakuhen_kakuritu);
	}
	if( kakuhen_random ==  1){
		return true;
	}else{
		return false;
	}
};

function abe_collection(){
	const collection_1 = document.getElementById("collection_1");
	const collection_2 = document.getElementById("collection_2");
	const collection_3 = document.getElementById("collection_3");
	const collection_4 = document.getElementById("collection_4");
	const collection_5 = document.getElementById("collection_5");
	const collection_6 = document.getElementById("collection_6");

	if(abe_image_collection[0] == 1){
		collection_1.innerHTML = abe_image[1];
	}
	if(abe_image_collection[1] == 1){
		collection_2.innerHTML = abe_image[2];
	}
	if(abe_image_collection[2] == 1){
		collection_3.innerHTML = abe_image[3];
	}
	if(abe_image_collection[3] == 1){
		collection_4.innerHTML = abe_image[4];
	}
	if(abe_image_collection[4] == 1){
		collection_5.innerHTML = abe_image[5];
	}
	if(abe_image_collection[5] == 1){
		collection_6.innerHTML = abe_image[6];
	}
};

function initialize(){
	if(kakuhen_num < 1){
		kakuhen = false;
		background.innerHTML = ""
	}
	if(kakuhen_check() == true){
		kakuhen = true;
		if(kakuhen_num < 1){
			kakuhen_num = kakuhen_keizoku;
		}else{
			kakuhen_num +=kakuhen_keizoku;
		}
		background.innerHTML = "<style>body{ background-image: linear-gradient(150deg, rgba(247, 166, 12, 1) 10%, rgba(255, 34, 87, 1) 40%, rgba(154, 39, 238, 1) 68%, rgba(35, 102, 247, 1) 90%);</style>"
	}else{
		kakuhen_num -= 1;
	}
	return;
};

function audio() {
	money_num -= 10000000;
	const money = document.getElementById("money");
	money.innerHTML = money_num;
	document.getElementById('btn_audio').currentTime = 0; //連続クリックに対応
	document.getElementById('btn_audio').play(); //クリックしたら音を再生
}

function Start(){
	document.getElementById('btn_audio2').currentTime = 0; //連続クリックに対応
    document.getElementById('btn_audio2').play(); //クリックしたら音を再生
	money_num -= cost;
	counter++;
	const Slot1 =document.getElementById("slot1");
	const number =document.getElementById("number");
	const money =document.getElementById("money");
	const kakuhen_moji =document.getElementById("kakuhen_moji");
	document.getElementById("counter").innerText = "カウンター"+counter+"連";
	initialize();
	if(kakuhen == true){
		kakuhen_moji.innerHTML = "<h1>確変中！ あと"+kakuhen_num+"回</h1>";
		random=Math.floor( Math.random() * (kakuritu /2));
	}else{
		kakuhen_moji.innerHTML = "";
		random=Math.floor( Math.random() * kakuritu);
	}
	var random2 = Math.floor(Math.random() * kakuritu);
	number.innerHTML=random;
	if(random == 5){		//阿部１
		btn_audio5.play();
		slot1_img=	abe_image[1];
		money_num +=plus_R;
		abe_image_collection[0] = 1 ;
	}else if(random == 6){		//阿部2
		btn_audio5.play();
		slot1_img= abe_image[2];
		money_num +=plus_R;
		abe_image_collection[1] = 1 ;
	}else if(random == 7){		//阿部3
		btn_audio5.play();
		slot1_img= abe_image[3];
		money_num +=plus_R;
		abe_image_collection[2] = 1 ;
	}else if(random == 8){		//若い阿部
		btn_audio6.play();
		slot1_img= abe_image[4];
		money_num +=plus_SR;
		abe_image_collection[3] = 1 ;
	}else if(random == 10){		//金の阿部
		btn_audio6.play();
		slot1_img= abe_image[5];
		money_num +=plus_SR;
		abe_image_collection[4] = 1 ;
	}else if(random == 200 && random_yami　== 400){			//虹の阿部
		slot1_img　= abe_image[6];
		money_num += plus_SSR;
		abe_image_collection[5] = 1;
	}else{			//ハズレ
		slot1_img=abe_image[0];
	}
	Slot1.innerHTML=slot1_img;
	money.innerHTML=money_num+"円";
	abe_collection();
	check_missions();
};

function yami_Start(){
	money_num -= yami_cost;
	document.getElementById('btn_audio3').currentTime = 0; //連続クリックに対応
    document.getElementById('btn_audio3').play(); //クリックしたら音を再生
	var random_yami = Math.floor( Math.random() * yami_kakuritu);
	const Slot1 =document.getElementById("slot1");
	const number =document.getElementById("number");
	const money =document.getElementById("money");
	const kakuhen_moji =document.getElementById("kakuhen_moji");
	const counter_html =document.getElementById("counter");
	counter++;
	document.getElementById("counter").innerText = "カウンター"+counter+"連";
	initialize();
	if(kakuhen == true){
	kakuhen_moji.innerHTML = "<h1>確変中！ あと"+kakuhen_num+"回</h1>";
	random=Math.floor( Math.random() * (kakuhen_yami_kakuritu * (kakuhen_num / 200)+3));
	}else{
	kakuhen_moji.innerHTML = "";
	random=Math.floor( Math.random() * yami_kakuritu);
	}
	number.innerHTML=random;
	if(random == 5){		//阿部１
		btn_audio5.play();
		slot1_img=	abe_image[1];
		money_num +=plus_R * 1.5;
		abe_image_collection[0] = 1 ;
	}else if(random == 6){		//阿部2
		btn_audio5.play();
		slot1_img= abe_image[2];
		money_num +=plus_R * 1.5;
		abe_image_collection[1] = 1 ;
	}else if(random == 7){		//阿部3
		btn_audio5.play();
		slot1_img= abe_image[3];
		money_num +=plus_R * 1.5;
		abe_image_collection[2] = 1 ;
	}else if(random == 8){		//若い阿部
		btn_audio6.play();
		slot1_img= abe_image[4];
		money_num +=plus_SR * 1.5;
		abe_image_collection[3] = 1 ;
	}else if(random == 10){		//金の阿部
		btn_audio6.play();
		slot1_img= abe_image[5];
		money_num +=plus_SR * 1.5;
		abe_image_collection[4] = 1 ;
	}else if(random == 200 && random_yami　== 400){			//虹の阿部
		slot1_img　= abe_image[6];
		money_num += plus_SSR * 1.5;
		abe_image_collection[5]　=1;
	}else{			//ハズレ
		slot1_img=abe_image[0];
	}
	Slot1.innerHTML=slot1_img;
	money.innerHTML=money_num+"円";
	abe_collection();
	check_missions();
}


function yake_Start(){
	money_num -= 10000;
	document.getElementById('btn_audio4').currentTime = 0; //連続クリックに対応
    document.getElementById('btn_audio4').play(); //クリックしたら音を再生
	const Slot1 =document.getElementById("slot1");
	const number =document.getElementById("number");
	const money =document.getElementById("money");
	counter++;
	document.getElementById("counter").innerText = "カウンター"+counter+"連";
	random=Math.floor( Math.random() * 12 );
	number.innerHTML=random;
	if(random == 5){
		btn_audio5.play();
		slot1_img=	abe_image[1];
		money_num +=plus_R;
		abe_image_collection[0] = 1 ;
	}else if(random == 6){
		btn_audio5.play();
		slot1_img= abe_image[2];
		money_num +=plus_R;
		abe_image_collection[1] = 1 ;
	}else if(random == 7){
		btn_audio5.play();
		slot1_img= abe_image[3];
		money_num +=plus_R;
		abe_image_collection[2] = 1 ;
	}else if(random == 8){
		btn_audio6.play();
		slot1_img= abe_image[4];
		money_num +=plus_SR;
		abe_image_collection[3] = 1 ;
	}else if(random == 10){
		btn_audio6.play();
		slot1_img= abe_image[5];
		money_num +=plus_SR;
		abe_image_collection[4] = 1 ;
	}else{
		slot1_img=abe_image[0];
	}
	Slot1.innerHTML=slot1_img;
	money.innerHTML=money_num+"円";
	abe_collection();
	check_missions()
};