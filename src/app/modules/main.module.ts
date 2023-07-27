import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainPageComponent} from "../pages/main-page/main-page.component";
import {RouterModule} from "@angular/router";
import {CodingComponent} from "../components/coding/coding.component";
import {ProcessComponent} from "../components/process/process.component";
import {GalleryComponent} from "../components/gallery/gallery.component";
import {SwiperModule} from "swiper/angular";
import {TeamComponent} from "../components/team/team.component";
import {CoreComponent} from "../components/core/core.component";
import {ReviewsComponent} from "../components/reviews/reviews.component";
import {ChartComponent} from "../components/chart/chart.component";
import {FooterComponent} from "../components/footer/footer.component";
import {StarsComponent} from "../components/stars/stars.component";
import {HeaderComponent} from "../components/header/header.component";
import {NumberDirective} from "../directives/number.directive";
import {NavbarComponent} from "../components/navbar/navbar.component";
import {PortfolioComponent} from "../components/portfolio/portfolio.component";
import {ScrollDirective} from "../directives/scroll.directive";
import {CategoryComponent} from "../components/category/category.component";
import {TechnologyComponent} from "../components/technology/technology.component";


const components = [

  MainPageComponent,
  CodingComponent,
  ProcessComponent,
  GalleryComponent,
  TeamComponent,
  CoreComponent,
  ReviewsComponent,
  ChartComponent,
  FooterComponent,
  StarsComponent,
  HeaderComponent,
  NumberDirective,
  NavbarComponent,
  PortfolioComponent,
  ScrollDirective,
  CategoryComponent,
  NumberDirective,
  TechnologyComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule
  ],
  exports: [
    ...components
  ]
})
export class MainModule { }
