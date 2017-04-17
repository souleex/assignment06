import { Component } from '@angular/core';

@Component({
    selector: 'mw-app',
    templateUrl: 'app/app.component.html',
	styleUrls: ['app/app.component.css']
})
export class AppComponent {
    onMediaItemDelete(mediaItem) {
        
    }
    
    firstMediaItem = {
        id:1,
        name: "Firebug",
        medium: "Series",
        category: "Sci-Fi",
        year: 2010,
        watchedOn: 1294166565384,
        isFavorite: false
    };
}
