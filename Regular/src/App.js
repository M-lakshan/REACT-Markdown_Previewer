import * as React from "https://esm.sh/react";
import './App.css';
import ReactMarkdown from "https://esm.sh/react-markdown";

class Editor extends React.Component {
  render() {
    return (
      <section className="for_editor">
        <h3 className="sub_container_title">
          <span><i className="fa-brands fa-free-code-camp"></i>Editor</span>
          <label htmlFor="edt_expander" className="edt_expand_toggle">
            <i className="fa-solid fa-arrows-left-right-to-line"></i>
            <i className="fa-solid fa-arrow-right-to-bracket"></i>
          </label>
        </h3>
        <textarea name="editor" id="editor" value={this.props.markdown} onChange={(e) => this.props.onChangeEvt(e.target.value)}></textarea>
      </section>
    );
  }
}

class Preview extends React.Component {
  render() {
    return (
      <section className="for_previewer">
        <h3 className="sub_container_title">
          <span><i className="fa-brands fa-free-code-camp"></i>Previewer</span>
          <label htmlFor="prv_expander" className="prv_expand_toggle">
            <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
            <i className="fa-solid fa-down-left-and-up-right-to-center"></i>
          </label>
        </h3>
        <div id="preview">
          <ReactMarkdown>{this.props.markdown}</ReactMarkdown>
        </div>
      </section>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultMarkdown: ``
    }
  }

  setMarkdownText(val) {
    this.setState({defaultMarkdown: val});
  }

  render() {
    // return null;
    return ( 
      <React.Component>
        <h1 id="title">Markdown Previewer</h1>
          <div className="main_container">
          <input type="checkbox" name="edt_expander" id="edt_expander" hidden/>
          <Editor markdown={this.state.defaultMarkdown} onChangeEvt={this.setMarkdownText}/>
          <input type="checkbox" name="prv_expander" id="prv_expander" hidden/>
          <Preview markdown={this.state.defaultMarkdown}/>
        </div>
      </React.Component>
    );
  }
}

export default App;