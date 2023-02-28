import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { combineLatest, map, startWith } from 'rxjs';
import { ProfileUser } from 'src/app/models/user-profile';
import { UsersService } from 'src/app/services/Users/users.service';
import {ChatsService} from 'src/app/services/Chats/chats.service'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit{
  user$ = this.usersService.currentUserProfile$;
  searchControl = new UntypedFormControl('');
  chatListControl = new UntypedFormControl('');

  users$ = combineLatest([
    this.usersService.allUsers$,
    this.user$,
    this.searchControl.valueChanges.pipe(startWith(''))
  ]).pipe(map(([users, user, searchString]) =>
    users.filter(u => u.displayName?.toLowerCase() && u.uid !== user?.uid))
  )

  myChats$ = this.chatsService.myChats$;

  constructor(
    private usersService: UsersService,
     private chatsService: ChatsService) {}

  ngOnInit():void {}

  createChat(otherUser: ProfileUser) {
    this.chatsService.createChat(otherUser).subscribe();
  }

}
