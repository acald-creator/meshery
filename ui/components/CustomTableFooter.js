import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowLeft from '@mui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons/KeyboardArrowRight';

const actionsStyles = (theme) => ({ wrapper : { flexShrink : 0,
  color : theme.palette.text.secondary,
  marginLeft : theme.spacing(2.5), }, });

class TablePaginationActions extends React.Component {
  handleFirstPageButtonClick = () => {
    this.props.onChangePage(0);
  }

  handleBackButtonClick = () => {
    this.props.onChangePage(this.props.page - 1);
  };

  handleNextButtonClick = () => {
    this.props.onChangePage(this.props.page + 1);
  };

  handleLastPageButtonClick = () => {
    this.props.onChangePage(
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
    );
  };

  render() {
    const {
      classes, count, page, rowsPerPage, theme,
    } = this.props;

    return (
      <div className={classes.wrapper}>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page"
        >
          {theme.direction === 'rtl'
            ? <KeyboardArrowRight />
            : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page"
        >
          {theme.direction === 'rtl'
            ? <KeyboardArrowLeft />
            : <KeyboardArrowRight />}
        </IconButton>
      </div>
    );
  }
}

TablePaginationActions.propTypes = { classes : PropTypes.object.isRequired,
  onChangePage : PropTypes.func.isRequired,
  page : PropTypes.number.isRequired, };

const TablePaginationActionsWrapper = withStyles(actionsStyles, { withTheme : true })(
  TablePaginationActions,
);

const defaultFooterStyles = {};

class CustomTableFooter extends Component {
    customLabelDisplayedRows = () => `Page ${this.props.page + 1}`

    render() {
      return (
        <TableFooter>
          <TableRow>
            <TablePagination
              labelRowsPerPage=""
              labelDisplayedRows={this.customLabelDisplayedRows}
              rowsPerPageOptions={[10]}
              colSpan={3}
              count={this.props.count}
              rowsPerPage={this.props.rowsPerPage}
              page={this.props.page}
              SelectProps={{ native : true, }}
              onChangePage={this.props.changePage}
              // onChangeRowsPerPage={this.handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActionsWrapper}
            />
          </TableRow>
        </TableFooter>
      );
    }
}

CustomTableFooter.propTypes = { changePage : PropTypes.func.isRequired,
  rowsPerPage : PropTypes.number.isRequired,
  page : PropTypes.number.isRequired, };

export default withStyles(defaultFooterStyles, { name : 'CustomFooter' })(CustomTableFooter);
