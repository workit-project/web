import React from 'react'

export default class Home extends React.Component<{}> {
  handleFileInput = (files: {
    name: string,
    lastModified: number,
    lastModifiedDate: Date,
  }[]) => {
    if (files.length === 0) {
      alert("No file selected")
      return
    } else if (files.length > 1) {
      alert("Only one file may be selected")
      return
    }
    const [file] = files
    console.log(file)
  }

  render() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{
          fontSize: 21,
        }}>
          WorkIt
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={(e: any) => this.handleFileInput(e.target.files)}
        />
      </div>
    )
  }
}
