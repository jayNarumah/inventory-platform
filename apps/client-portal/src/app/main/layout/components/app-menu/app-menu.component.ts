import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppLayoutService } from '../../services/app-layout.service';
import { AppState } from 'apps/client-portal/src/app/store/app.state';
import { AuthService } from '../../../auth/services/auth.service';
import { AppAuthActions } from 'apps/client-portal/src/app/store/auth/auth.action';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss'],
})
export class AppMenuComponent implements OnInit {
  model: any[] = [];
  model2: any[] = [];
  isClientBudgeting = false;
  isClientBureau = false;
  isClientMda = false;

  constructor(
    public layoutService: AppLayoutService,
    // private readonly appStore: Store<AppState>,
    private readonly router: Router,
    private readonly authService: AuthService
  ) {
  }

  ngOnInit() {
    this.model = [
      {
        items: [
          {
            label: 'Dashboard',
            icon: 'assets/images/logos/Icons/dashboard.png',
            height: '25',
            padding: 'pt-2 pl-2',
            routerLink: ['/module/budgeting/dashboard/main'],
          },
          {
            label: 'Appropriations',
            icon: 'assets/images/logos/Icons/bar-chart.png',
            height: '25',
            padding: 'pt-2 pl-2',
            routerLink: ['/module/budgeting/appropriations/list'],
          },
          {
            label: 'User administration',
            icon: 'assets/images/logos/Icons/management.png',
            height: '25',
            padding: 'pt-2 pl-2',
            routerLink: ['/module/budgeting/user/users/list'],
          },
          {
            label: 'Settings',
            icon: 'assets/images/logos/Icons/management.png',
            height: '25',
            padding: 'pt-2 pl-2',
            routerLink: ['/module/budgeting/settings'],
          },

          {
            label: 'Dashboard',
            icon: 'assets/images/logos/Icons/dashboard.png',
            height: '25',
            padding: 'pt-1 pr-3',
            routerLink: ['/module/bureau/dashboard/main'],
            visible: this.isClientBureau,
          },
          {
            label: 'MDAs',
            icon: 'assets/images/logos/Icons/office-building.png',
            height: '25',
            padding: 'pt-1 pr-3',
            routerLink: ['/module/bureau/mda/mdas/list'],
            visible: this.isClientBureau,
          },
          {
            label: 'Vendors',
            icon: 'assets/images/logos/Icons/excavator.png',
            height: '25',
            padding: 'pt-1 pr-3',
            routerLink: ['/module/bureau/vendor/vendors/list'],
            visible: this.isClientBureau,
          },
          {
            label: 'Appropriations',
            icon: 'assets/images/logos/Icons/bar-chart.png',
            height: '25',
            padding: 'pt-1 pr-3',
            routerLink: ['/module/bureau/appropriation/list'],
            visible: this.isClientBureau,
          },
          {
            label: 'Procurement cycles',
            icon: 'assets/images/logos/Icons/refresh.png',
            height: '25',
            padding: 'pt-1 pr-3',
            routerLink: ['/module/bureau/procurement/procurements/cycles/list'],
            visible: this.isClientBureau,
          },
          {
            label: 'Tendering',
            icon: 'assets/images/logos/Icons/auction.png',
            height: '25',
            padding: 'pt-1 pr-3',
            routerLink: ['/module/bureau/dashboard'],
            visible: this.isClientBureau,
          },
          {
            label: 'Projects',
            icon: 'assets/images/logos/Icons/rocket.png',
            height: '25',
            padding: 'pt-1 pr-3',
            routerLink: ['/module/bureau/user/users/list'],
            visible: this.isClientBureau,
          },
          {
            label: 'User administration',
            icon: 'assets/images/logos/Icons/management.png',
            height: '25',
            padding: 'pt-1 pr-3',
            routerLink: ['/module/bureau/bureau/user/users/list'],
            visible: this.isClientBureau,
          },
          {
            label: 'Settings',
            icon: 'assets/images/logos/Icons/management.png',
            height: '25',
            padding: 'pt-1 pr-3',
            routerLink: ['/module/bureau/bureau/settings/unspc-codes/import'],
            visible: this.isClientBureau,
          },
        ],
      },
    ];

    this.model2 = [
      {
        items: [
          {
            label: 'Toggle sidebar',
            icon: 'assets/images/logos/Icons/menu-2.png',
            height: '25',
            padding: 'pt-2',
            routerLink: ["''"],
            command: () => {
              this.togleSidebar();
            },
          },
          {
            label: 'Logout',
            icon: 'assets/images/logos/Icons/exit.png',
            height: '25',
            padding: 'pt-2',
            routerLink: ['/auth/mda/login'],
            visible: this.isClientMda,
          },
          {
            label: 'Logout',
            icon: 'assets/images/logos/Icons/exit.png',
            height: '25',
            padding: 'pt-2',
            routerLink: ['/auth/budgeting/login'],
          },
          {
            label: 'Logout',
            icon: 'assets/images/logos/Icons/exit.png',
            height: '25',
            padding: 'pt-2',
            routerLink: ['/auth/bureau/login'],
            visible: this.isClientBureau,
          },
        ],
      },
    ];
  }

  logout() {
    // this.appStore.dispatch(AppAuthActions.logout());
    this.router.navigate(['/auth/budgeting/login']);
  }

  togleSidebar() {
    this.layoutService.onMenuToggle();
  }


}
