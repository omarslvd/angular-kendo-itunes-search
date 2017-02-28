import { Component, OnInit } from '@angular/core';
import { ItunesService } from '../shared/itunes.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
  providers: [ItunesService]
})
export class ArtistComponent implements OnInit {
  searchResults: Array<any> = [];
  artistId: number = 0;
  selectedArtist: string;

  constructor(private itunesService: ItunesService) { }

  ngOnInit() {
  }

  search(searchTerm) {
    this.itunesService.search(searchTerm)
      .then(results => {
        this.searchResults = results;
      })
  }

  getAlbums(artistId: number, artistName: string) {
    this.artistId = artistId;
    this.selectedArtist = artistName;
  }
}
