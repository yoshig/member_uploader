import React from "react"
import PropTypes from "prop-types"

class MemberImporter extends React.Component {
  render () {
    return (
      <React.Fragment>
        {
          this.props.members.map((member) => {
            return (
              <div>
                {member.first_name} {member.last_name} - {member.email}
              </div>
            )
          })
        }
      </React.Fragment>
    );
  }
}

MemberImporter.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.object
  )
};

export default MemberImporter;
