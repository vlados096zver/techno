import {Component, ViewChild} from '@angular/core';
import {process} from "../../data/process";
import {
  ICategory,
  ICore,
  IGallery,
  IPortfolio,
  IPrice,
  IProcess,
  IReviews,
  ITeam,
  ITechnology
} from "../../models/data.model";
import {gallery} from "../../data/gallery";
import {team} from "../../data/team";
import {core} from "../../data/core";
import {SwiperOptions} from "swiper";
import {SwiperComponent} from "swiper/angular";
import {reviews} from "../../data/reviews";
import {portfolio} from "../../data/portfolio";
import {category} from "../../data/category";
import {price} from "../../data/price";
import {technology} from "../../data/techology";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  @ViewChild('swiperGallery', { static: false }) swiperTeam?: SwiperComponent;
  @ViewChild('swiperBlog', { static: false }) swiperBlog?: SwiperComponent;
  @ViewChild('swiperReviews', { static: false }) swiperReviews?: SwiperComponent;


  showVideo = false;

  process: IProcess[] = process;
  gallery: IGallery[] = gallery;
  team: ITeam[] = team;
  core: ICore[] = core;
  reviews: IReviews[] = reviews;
  portfolio: IPortfolio[] = portfolio;
  category: ICategory[] = category;
  price: IPrice[] = price;
  technology: ITechnology[] = technology;

  configGallery: SwiperOptions = {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 40,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  };


  configGalleryBlog: SwiperOptions = {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 40,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  };

  configCategory: SwiperOptions = {
    loop: false,
    slidesPerView: 1,
  };

  configReviews: SwiperOptions = {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 40,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  };

  tabs = ['All', 'It Solution', 'Business', 'Agency'];
  activeTab = 0;

  changeState(state: number) {
    this.activeTab = state;
  }

  setSwiperInstance() {
    setInterval(() => {
      this.swiperReviews?.swiperRef.slideNext();
    }, 2000);
  }

  showPopupVideo(){
    this.showVideo = ! this.showVideo;
  }

  scrollUp() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
