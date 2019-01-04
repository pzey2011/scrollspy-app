import React, { Component } from 'react';
import './App.css';
import {Item} from './Item';

class App extends Component {
  constructor() {
      super();
      this.state = {
        idSelected:1,

      };
      this.handleScroll=this.handleScroll.bind(this);
      this.handleClickItem=this.handleClickItem.bind(this);
      this.scrollToId=this.scrollToId.bind(this);
      this.navs=[
        {
          title:"آیتم اول",
          content:"متن اول : ستایش خداوندی را که در یگانگی، والا و در بی­ همتایی، نزدیک و در اقتدار شکوهمند، و در ارکان خود بسی بزرگ است. دانشش بر همه چیز احاطه دارد و حال آنکه او در مقام خودش است و آفریدگان، همگی مقهور قدرت اویند. بزرگی که پیوسته بوده و ستوده ­ای که همیشه خواهد بود. پدید آورنده آسمانهای بلند و گستراننده گستره شده ­ها و فرمانروای مطلق زمینها و آسمانهاست و بی­ اندازه پاک و بینهایت پاکیزه است. پروردگار فرشتگان و روح ­القدس و نسبت به هر آنچه آفریده، فزونبخش است و چه ساخته و پرداخته، غرقه عطا و فضل اویند. هر دیده­ ای را می­ بیند، و هیچ دیده ­ای را توان دیدار او نیست."
        },
        {
          title:"آیتم دوم",
          content:"متن دوم : بزرگوار و بردبار و بخشنده ایست که رحمتش همه چیز را فرا گرفته و منعمی است که بر همه مخلوقات منت دارد. در اجرای کیفر مجرمان شتاب نمی ­کند و به عذابی که در خور آنند تعجیل نمی­ نماید. به اسرار نهان و به سویداء سینه­ ها آگاه است و هیچ رازی از او پوشیده نیست و هیچ امر پنهانی او را به اشتباه نمی­ افکند."
        },
        {
          title:"آیتم سوم",
          content:"متن سوم : بر همه اشیاء، محیط و بر همه چیز، چیره و بر هر نیرویی غالب و بر هر کاری تواناست. نیست مانندی برایش و حال آن که او پدید آورنده همه موجودات است از نیستی. جاودانی که به عدل، پایدار است و خدایی جز او نیست. سرافراز و حکیم و والاتر از آنکه به دیده­ ها مشهود گردد و لیکن او هر دیده ای را در می­ یابد و بر هر چیز دقیق و آگاه است. به دیده هیچ بیننده در نیامده تا وصفش ممکن شود و احدی را از چگونگی پیدا و پنهانش آگاهی نیست مگر به همان مقدار که خود (عزّوجلّ) از خویشتن خبر داده است."
        },
        {
          title:"آیتم چهارم",
          content:"متن چهارم : و گواهی می­ دهم: او خدایی است که هستی، آکنده قداست اوست و آغازِ بی آغاز و انجام بی فرجام (همه هستی) به نور او احاطه شده است. فرمانش بی مشورت مستشاری جاری و نافذ است و قضا و تقدیرش بی مدد همکاری، بر کائنات حکومت دارد و در تدبیر امر خلقش، هیچ نقص و بی نظمی نیست. موجودات را بی آنکه نمونه­ ای از پیش داشته باشد، ابتکار و خلقت فرمود و بدون کمک هیچ یاوری آنها را بیافرید و در این هنگامه نه او را رنجی و نه نیازی به چاره سازی بود. به ایجاد خلق اراده نموده پس خلق، خلعت هستی یافتند و (به نور وجودش) آشکار شدند. پس اوست خدایی که معبودی جز او نیست، آن (خدایی) که به صنع خود، اتقان و استواری داد و در مصنوع خود، حسن و زیبایی نهاد. دادگریست که هرگز ستم نکند و بزرگواریست که کلیه امور به او باز می­گردد."
        },
        {
          title:"آیتم پنجم",
          content:"متن پنجم : و گواهی می­دهم اوست که هستی در برابر قدرتش فروتن و در مقابل هیأتش سر افکنده و تسلیم است. اوست سلطان سلاطین و مالک همه ملکها و گرداننده افلاک و فرمانروای مهر و ماه که هر یک تا زمانی مقدّر در کار گردشند. اوست که چادر شب بر رخسار روز کشد و شب را در نور روز فراگیر کند که هر یک شتابان در جستجوی یکدیگرند. اوست شکننده ستمکاران و زورگویان و نابود کننده شیاطین پست و پلید. نه او را ضدّی است و نه شریکی. یکتای بی نیاز است. نه کسی زاده اوست و نه او زاده کسی و نه احدی همتا و مانند وی است. معبودی یکتا و پروردگاری ارجمند است هر چه خواهد کند و اراده ­اش بر جهان فرمانرواست. او بر هر چیز و به شمار همه چیز آگاه است. مرگ و زندگی، نیازمندی و بی نیازی به اراده او و خنده و گریه و منع و عطا به خواست اوست."
        },
        {
          title:"آیتم ششم",
          content:"متن ششم : و گواهی می­دهم اوست که هستی در برابر قدرتش فروتن و در مقابل هیأتش سر افکنده و تسلیم است. اوست سلطان سلاطین و مالک همه ملکها و گرداننده افلاک و فرمانروای مهر و ماه که هر یک تا زمانی مقدّر در کار گردشند. اوست که چادر شب بر رخسار روز کشد و شب را در نور روز فراگیر کند که هر یک شتابان در جستجوی یکدیگرند. اوست شکننده ستمکاران و زورگویان و نابود کننده شیاطین پست و پلید. نه او را ضدّی است و نه شریکی. یکتای بی نیاز است. نه کسی زاده اوست و نه او زاده کسی و نه احدی همتا و مانند وی است. معبودی یکتا و پروردگاری ارجمند است هر چه خواهد کند و اراده ­اش بر جهان فرمانرواست. او بر هر چیز و به شمار همه چیز آگاه است. مرگ و زندگی، نیازمندی و بی نیازی به اراده او و خنده و گریه و منع و عطا به خواست اوست."
        }
      ];
      this.itemRefs=Array(this.navs.length).fill(0).map(() => React.createRef());
  }
 componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.scrollTo({
        top:this.itemRefs[1].current.offsetTop, 
        behavior: "smooth"  
    });
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(event){
	  debugger;
    let found=false;
    if(window.pageYOffset)
    { 
      for (var i = 1; i < this.itemRefs.length; i++) {
        if(window.pageYOffset<this.itemRefs[i].current.offsetTop)
        {
          this.setState({idSelected:i-1});
          found=true;
          return;
        }
      }
      if(!found)
      {
        this.setState({idSelected:this.itemRefs.length-1});
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
	debugger;
    for (var i = 0; i < this.itemRefs.length; i++) {
      if(event.target.id==='nav-'+i)
      {
        this.setState({idSelected:i});
        this.scrollToId(this.itemRefs[i]);
      }
    }
  }
  render() { 
    let titles=this.navs
    .map((object,i) =>
    {
        return(
          <a id={"nav-"+(i)} className={"pointer "+(this.state.idSelected==i ? "active" : "")} onClick={this.handleClickItem}>{object.title}</a>
        );
    });
    let items=this.navs
    .map((object,i) =>
    {
      return(
        <React.Fragment>
          <Item key={i} content={object.content} selected={this.state.idSelected===i} />
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
              {titles}
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
