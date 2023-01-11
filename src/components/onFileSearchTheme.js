const THEME = {
  Table: `
        --data-table-library_grid-template-columns:  30% 30% repeat(2, minmax(0, 1fr)) 50px;
      `,
  Row: `background-color: #000;
    color: #fff; font-size: 1.5rem;
    .td {
          border-bottom: 1px solid #fff;
        }`,
  HeaderRow: `background-color: #000; color: #fff; font-size: 1rem; font-weight: bold;  .th {
          border-bottom: 1px solid #fff;
          padding: 10px 0;
        }`,
  BaseCell: `padding-right: 10px; padding-top: 10px; padding-bottom: 10px;
  &:last-of-type {
          text-align: right;
          padding-right: 20px;
        }
        &:first-of-type {
          padding-left: 20px;
        }`,
}

export default THEME
