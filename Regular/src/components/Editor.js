import React from 'react';

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

export default Editor;