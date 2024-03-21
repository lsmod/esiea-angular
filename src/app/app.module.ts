import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { SearchInputComponent } from './component/search-input/search-input.component';

@NgModule({
  declarations: [AppComponent, ProductItemComponent, SearchInputComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
