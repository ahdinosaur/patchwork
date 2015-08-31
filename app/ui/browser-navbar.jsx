var BrowserNavbarBtn = React.createClass({
  render: function() {
    return <a href="#" className={this.props.disabled?'disabled':''} title={this.props.title} onClick={this.props.onClick}><i className={'fa fa-'+this.props.icon} /></a>
  }
})

var BrowserNavbarLocation = React.createClass({
  onKeyDown: function (e) {
    if (e.keyCode == 13)
      this.props.onEnterLocation(e.target.value)
  },
  onChange: function (e) {
    this.props.onChangeLocation(e.target.value)
  },
  render: function() {
    return <input type="text" onKeyDown={this.onKeyDown} onChange={this.onChange} onContextMenu={this.props.onContextMenu} value={this.props.page.location} />
  }
})

var BrowserNavbar = React.createClass({
  render: function() {
    return <div id="browser-navbar">
      <BrowserNavbarBtn title="Rewind" icon="angle-double-left fa-lg" onClick={this.props.onClickHome} disabled={!this.props.page.canGoBack} />
      <BrowserNavbarBtn title="Back" icon="angle-left fa-lg" onClick={this.props.onClickBack} disabled={!this.props.page.canGoBack} />
      <BrowserNavbarBtn title="Forward" icon="angle-right fa-lg" onClick={this.props.onClickForward} disabled={!this.props.page.canGoForward} />
      <BrowserNavbarBtn title="Refresh" icon="circle-thin" onClick={this.props.onClickRefresh} disabled={!this.props.page.canRefresh} />
      <div className="input-group">
        <BrowserNavbarLocation onEnterLocation={this.props.onEnterLocation} onChangeLocation={this.props.onChangeLocation} onContextMenu={this.props.onLocationContextMenu} page={this.props.page} />
        <BrowserNavbarBtn title="Favorite" icon="star-o" onClick={this.props.onClickInstall} disabled={!this.props.page.canInstall} />
        <BrowserNavbarBtn title="Discussion and Issues" icon="commenting-o" onClick={this.props.onClickDiscuss} disabled={!this.props.page.canDiscuss} />
        <BrowserNavbarBtn title="Forks and Revision History" icon="code-fork" onClick={this.props.onClickFork} disabled={!this.props.page.canFork} />
        <BrowserNavbarBtn title="Repository" icon="book" onClick={this.props.onClickFiles} disabled={!this.props.page.canFiles} />
      </div>
      <BrowserNavbarBtn title="Network Sync" icon="cloud" onClick={this.props.onClickSync} />
    </div>
  }
})