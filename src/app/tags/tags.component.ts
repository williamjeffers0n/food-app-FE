import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Tag } from '../shared/models';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent implements OnInit {
  tags: Tag[] = [];
  searchItem: string = 'all';
  @Input() foodPageTags: string[] = [];
  @Input() justifyContent: string = 'center';

  constructor(
    private foodService: FoodService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (!this.foodPageTags.length) {
      this.tags = this.foodService.getAllTag();
    }

    this.route.params.subscribe((params) => {
      if (params['tag']) {
        this.searchItem = params['tag'];
      } else {
        this.searchItem = 'all';
      }
    });
  }
}
