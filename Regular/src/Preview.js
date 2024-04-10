import React from 'react';
import ReactMarkdown from 'react-markdown';

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

export default Preview;