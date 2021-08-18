import React from 'react'

class FAQ extends React.Component {
  render() {
    return <div tabindex="0" class="collapse max-width collapse-plus"> 
    <div class="collapse-title text-xl font-medium">
      I open with focus
    </div> 
    <div class="collapse-content"> 
      <p>Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using 
        <span class="badge badge-outline">collapse-open</span> and 
        <span class="badge badge-outline">collapse-close</span> classes.
      </p>
    </div>
  </div> 

  }
}

export default FAQ

