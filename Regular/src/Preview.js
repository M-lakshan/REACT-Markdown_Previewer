import React from 'react';
// import ReactMarkdown from 'react-markdown';
import { marked } from 'marked';

class Preview extends React.Component {
  render() {
    marked.setOptions({
      breaks: true
    })

    return (
      <section className="for_previewer">
        <h3 className="sub_container_title">
          <span><i className="fa-brands fa-free-code-camp"></i>Previewer</span>
          <label htmlFor="prv_expander" className="prv_expand_toggle">
            <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
            <i className="fa-solid fa-down-left-and-up-right-to-center"></i>
          </label>
        </h3>
        <div id="preview" dangerouslySetInnerHTML = {
          {
            __html: marked(this.props.markdown)
          }
        }></div>
      </section>
    );
  }
}

export default Preview;