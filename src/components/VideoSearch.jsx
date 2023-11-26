import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import '../App.css';
import './VideoSearch.css';

const KEY = 'AIzaSyBJkqVEn2pbgk168yeca06dFjdaC_n7TAA';

class VideoSearch extends React.Component {
  state = { videos: [], selectedVideo: null, errorMessage: '' };

  // default result
  componentDidMount() {
    this.onTermSubmit('Java');
  }

  // asynchronous api request
  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
    // if (this.state.videos.length == 0) this.setState({ errorMessage: 'No results found! Try again' });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container_video" style={{ marginTop: '25px' }}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid_video">
          <div className="ui stackable two column grid_video">
            <div className="ten wide column main_video">
              <VideoDetail video={this.state.selectedVideo} />
            </div>

            <div className="six wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoSearch;
