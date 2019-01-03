import React, { Component } from 'react';
import './App.css';
import {Item} from './Item';

class App extends Component {
  constructor() {
      super();
      this.state = {
        idSelected:1,

      };
      this.item1 = React.createRef();
      this.item2 = React.createRef();
      this.item3 = React.createRef();
      this.item4 = React.createRef();
      this.item5 = React.createRef();
      this.handleScroll=this.handleScroll.bind(this);
      this.handleClickItem=this.handleClickItem.bind(this);
      this.scrollToId=this.scrollToId.bind(this);
      this.contents=[
        {item:"متن اول : ستایش خداوندی را که در یگانگی، والا و در بی­ همتایی، نزدیک و در اقتدار شکوهمند، و در ارکان خود بسی بزرگ است. دانشش بر همه چیز احاطه دارد و حال آنکه او در مقام خودش است و آفریدگان، همگی مقهور قدرت اویند. بزرگی که پیوسته بوده و ستوده ­ای که همیشه خواهد بود. پدید آورنده آسمانهای بلند و گستراننده گستره شده ­ها و فرمانروای مطلق زمینها و آسمانهاست و بی­ اندازه پاک و بینهایت پاکیزه است. پروردگار فرشتگان و روح ­القدس و نسبت به هر آنچه آفریده، فزونبخش است و چه ساخته و پرداخته، غرقه عطا و فضل اویند. هر دیده­ ای را می­ بیند، و هیچ دیده ­ای را توان دیدار او نیست."},
        {item:"متن دوم : بزرگوار و بردبار و بخشنده ایست که رحمتش همه چیز را فرا گرفته و منعمی است که بر همه مخلوقات منت دارد. در اجرای کیفر مجرمان شتاب نمی ­کند و به عذابی که در خور آنند تعجیل نمی­ نماید. به اسرار نهان و به سویداء سینه­ ها آگاه است و هیچ رازی از او پوشیده نیست و هیچ امر پنهانی او را به اشتباه نمی­ افکند."},
        {item:"متن سوم : بر همه اشیاء، محیط و بر همه چیز، چیره و بر هر نیرویی غالب و بر هر کاری تواناست. نیست مانندی برایش و حال آن که او پدید آورنده همه موجودات است از نیستی. جاودانی که به عدل، پایدار است و خدایی جز او نیست. سرافراز و حکیم و والاتر از آنکه به دیده­ ها مشهود گردد و لیکن او هر دیده ای را در می­ یابد و بر هر چیز دقیق و آگاه است. به دیده هیچ بیننده در نیامده تا وصفش ممکن شود و احدی را از چگونگی پیدا و پنهانش آگاهی نیست مگر به همان مقدار که خود (عزّوجلّ) از خویشتن خبر داده است."},
        {item:"متن چهارم : و گواهی می­ دهم: او خدایی است که هستی، آکنده قداست اوست و آغازِ بی آغاز و انجام بی فرجام (همه هستی) به نور او احاطه شده است. فرمانش بی مشورت مستشاری جاری و نافذ است و قضا و تقدیرش بی مدد همکاری، بر کائنات حکومت دارد و در تدبیر امر خلقش، هیچ نقص و بی نظمی نیست. موجودات را بی آنکه نمونه­ ای از پیش داشته باشد، ابتکار و خلقت فرمود و بدون کمک هیچ یاوری آنها را بیافرید و در این هنگامه نه او را رنجی و نه نیازی به چاره سازی بود. به ایجاد خلق اراده نموده پس خلق، خلعت هستی یافتند و (به نور وجودش) آشکار شدند. پس اوست خدایی که معبودی جز او نیست، آن (خدایی) که به صنع خود، اتقان و استواری داد و در مصنوع خود، حسن و زیبایی نهاد. دادگریست که هرگز ستم نکند و بزرگواریست که کلیه امور به او باز می­گردد."},
        {item:"متن پنجم : و گواهی می­دهم اوست که هستی در برابر قدرتش فروتن و در مقابل هیأتش سر افکنده و تسلیم است. اوست سلطان سلاطین و مالک همه ملکها و گرداننده افلاک و فرمانروای مهر و ماه که هر یک تا زمانی مقدّر در کار گردشند. اوست که چادر شب بر رخسار روز کشد و شب را در نور روز فراگیر کند که هر یک شتابان در جستجوی یکدیگرند. اوست شکننده ستمکاران و زورگویان و نابود کننده شیاطین پست و پلید. نه او را ضدّی است و نه شریکی. یکتای بی نیاز است. نه کسی زاده اوست و نه او زاده کسی و نه احدی همتا و مانند وی است. معبودی یکتا و پروردگاری ارجمند است هر چه خواهد کند و اراده ­اش بر جهان فرمانرواست. او بر هر چیز و به شمار همه چیز آگاه است. مرگ و زندگی، نیازمندی و بی نیازی به اراده او و خنده و گریه و منع و عطا به خواست اوست."}
      ];
      this.itemRefs=Array(this.contents.length).fill(0).map(() => React.createRef());
  }
 componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(event){
    if(event.pageY)
    { 
      if(event.pageY<this.itemRefs[1].current.offsetTop)
      {
        this.setState({idSelected:0});
      }
      else if(event.pageY<this.itemRefs[2].current.offsetTop)
      {
        this.setState({idSelected:1});
      }
      else if(event.pageY<this.itemRefs[3].current.offsetTop)
      {
        this.setState({idSelected:2});
      }
      else if(event.pageY<this.itemRefs[4].current.offsetTop)
      {
        this.setState({idSelected:3});
      }
      else
      {
        this.setState({idSelected:4});
      }
    }    
  } 
  scrollToId(ref){

    window.scrollTo({
        top:ref.current.offsetTop, 
        behavior: "smooth"  
    });

  }
  handleClickItem(event){
    switch(event.target.id) {
      case 'nav-1':
        this.setState({idSelected:0});
        this.scrollToId(this.itemRefs[0]);
        //console.log("id:",1);
        break;
      case 'nav-2':
        this.setState({idSelected:1});
        this.scrollToId(this.itemRefs[1]);
        //console.log("id:",2);
        break;
      case 'nav-3':
        this.setState({idSelected:2});
        this.scrollToId(this.itemRefs[2]);
        //console.log("id:",3);
      break;
      case 'nav-4':
        this.setState({idSelected:3});
        this.scrollToId(this.itemRefs[3]);
        //console.log("id:",4);
        break;
      case 'nav-5':
        this.setState({idSelected:4});
        this.scrollToId(this.itemRefs[4]);
        //console.log("id:",5);
        break;
    }
  }
  render() { 
    let items=this.contents
    .map((object,i) =>
    {
      return(
        <React.Fragment>
          <Item key={i} content={object.item} selected={this.state.idSelected===i} />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </React.Fragment> 
      );
    });
    let refItems =this.itemRefs
    .map((refItem,i)=>{
      return(
        <div ref={refItem} key={i}>
          {items[i]}
        </div>
      );
    });
    
    return (
      <div class="container">
        <div className="row">

            <div className="col-sm-3 vertical-menu">
              <a id="nav-1" className={"pointer "+(this.state.idSelected==0 ? "active" : "")} onClick={this.handleClickItem}>آیتم اول</a>
              <a id="nav-2" className={"pointer "+(this.state.idSelected==1 ? "active" : "")} onClick={this.handleClickItem}>آیتم دوم</a>
              <a id="nav-3" className={"pointer "+(this.state.idSelected==2 ? "active" : "")} onClick={this.handleClickItem}>آیتم سوم</a>
              <a id="nav-4" className={"pointer "+(this.state.idSelected==3 ? "active" : "")} onClick={this.handleClickItem}>آیتم چهارم</a>
              <a id="nav-5" className={"pointer "+(this.state.idSelected==4 ? "active" : "")} onClick={this.handleClickItem}>آیتم پنجم</a>
            </div> 
            <div className="col-sm-9 items">
              {refItems}
            </div>
        </div>
      </div>
    );
  }
}

export default App;
