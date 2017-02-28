import { Component, OnInit, Input } from '@angular/core';
import { ItunesService } from '../shared/itunes.service';
import { PlayerService } from '../shared/player.service';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
  providers: [ItunesService]
})
export class AlbumComponent implements OnInit {
  private view: GridDataResult;
  private _artistId: number = 0;
  private pageSize: number = 5;
  private skip: number = 0;

  @Input()
  set artistId(artistId: number) {
    this._artistId = artistId;

    this.getAlbums();
  }
  get artistId() {
    return this._artistId;
  }

  constructor(private itunesService: ItunesService) { }

  ngOnInit() {
  }

  getAlbums() {
    this.itunesService.getAlbums(this.artistId)
      .then((results: Array<any>) => {
        this.view = {
          data: results.slice(this.skip, this.skip + this.pageSize),
          total: results.length
        }
      });
  }

  protected pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.getAlbums();
  }
}
