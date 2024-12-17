import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { GamelistComponent } from "./gamelist/gamelist.component";
import { ChatframeComponent } from "./chatframe/chatframe.component";

@Component({
  selector: 'app-lobby',
  standalone: true,
  imports: [NavbarComponent, GamelistComponent, ChatframeComponent],
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.scss'
})
export class LobbyComponent {

}
