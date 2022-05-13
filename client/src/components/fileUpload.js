import React, { Fragment } from 'react'

const fileUpload = () => {
  return (
    <Fragment>
      <form>
      <div class="mb-3">
      <label for="formFile" class="form-label">Default file input example</label>
      <input class="form-control" type="file" id="formFile"/>
      </div>
      </form>
    </Fragment>
  )
}

export default fileUpload