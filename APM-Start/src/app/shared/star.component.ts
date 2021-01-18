import { templateJitUrl } from '@angular/compiler';
import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']

})

export class StarComponent implements OnChanges {

    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();

    //@Output() notify: EventEmitter<string> =
        //new EventEmitter<string>();
    ngOnChanges(changes: SimpleChanges): void {
        this.starWidth = this.rating * 75 / 5;
    }

    onClick(): void {
        this.ratingClicked.emit(`${this.rating}`);
      
    }

}