import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { AppMenuComponent } from './components/app.menu.component';
import { AppMenuitemComponent } from './components/app.menuitem.component';
import { RouterModule } from '@angular/router';
import { AppTopBarComponent } from './components/app.topbar.component';
import { AppFooterComponent } from './components/app.footer.component';
import { AppConfigModule } from './config/config.module';
import { AppSidebarComponent } from "./components/app.sidebar.component";
import { AppLayoutComponent } from "./app.layout.component";
import { MenuModule } from 'primeng/menu';
import { ChipModule } from 'primeng/chip';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@NgModule({
  declarations: [
    AppMenuitemComponent,
    AppTopBarComponent,
    AppFooterComponent,
    AppMenuComponent,
    AppSidebarComponent,
    AppLayoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InputTextModule,
    MenuModule,
    SidebarModule,
    ChipModule,
    TableModule,
    ScrollPanelModule,
    ButtonModule,
    OverlayPanelModule,
    BadgeModule,
    RadioButtonModule,
    InputSwitchModule,
    RippleModule,
    RouterModule,
    AppConfigModule
  ],
  exports: [AppLayoutComponent]
})
export class AppLayoutModule { }
