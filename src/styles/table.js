export default () => `
.table {
  border-collapse: collapse;
  border-spacing: 0;
}

.th {
  font-weight: bold;
  vertical-align: bottom;
}

.td {
  font-weight: normal;
  vertical-align: top;
}

.table {
  font-size: inherit;
  font: 100%;
}

.td, .td img {
  vertical-align: top;
}

.table {
  width: 100%;
}

.table td,
.table th {
  text-align: left;
  vertical-align: top;
}

.table th {
  color: #222324;
}

.table {
  background: #fff;
  color: #222324;
  margin-bottom: 20px;
  width: 100%;
}

.table td,
.table th {
  border: 1px solid #d3d6db;
  border-width: 0 0 1px;
  padding: 8px 10px;
  vertical-align: top;
}

.table td.is-icon,
.table th.is-icon {
  padding: 5px;
  text-align: center;
  white-space: nowrap;
  width: 1%;
}

.table td.is-icon .fa,
.table th.is-icon .fa {
  display: inline-block;
  font-size: 21px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  vertical-align: top;
  width: 24px;
}

.table td.is-icon.is-link,
.table th.is-icon.is-link {
  padding: 0;
}

.table td.is-icon.is-link > a,
.table th.is-icon.is-link > a {
  padding: 5px;
}

.table td.is-link,
.table th.is-link {
  padding: 0;
}

.table td.is-link > a,
.table th.is-link > a {
  display: block;
  padding: 8px 10px;
}

.table td.is-link > a:hover,
.table th.is-link > a:hover {
  background: #1fc8db;
  color: white;
}

.table td.is-narrow,
.table th.is-narrow {
  white-space: nowrap;
  width: 1%;
}

.table th {
  color: #222324;
  text-align: left;
}

.table tr:hover {
  background: #f5f7fa;
  color: #222324;
}

.table thead td,
.table thead th {
  border-width: 0 0 2px;
  color: #aeb1b5;
}

.table tbody tr:last-child td,
.table tbody tr:last-child th {
  border-bottom-width: 0;
}

.table tfoot td,
.table tfoot th {
  border-width: 2px 0 0;
  color: #aeb1b5;
}

.table.is-bordered td,
.table.is-bordered th {
  border-width: 1px;
}

.table.is-bordered tr:last-child td,
.table.is-bordered tr:last-child th {
  border-bottom-width: 1px;
}

.table.is-narrow td,
.table.is-narrow th {
  padding: 5px 10px;
}

.table.is-narrow td.is-icon,
.table.is-narrow th.is-icon {
  padding: 2px;
}

.table.is-narrow td.is-icon.is-link,
.table.is-narrow th.is-icon.is-link {
  padding: 0;
}

.table.is-narrow td.is-icon.is-link > a,
.table.is-narrow th.is-icon.is-link > a {
  padding: 2px;
}

.table.is-narrow td.is-link,
.table.is-narrow th.is-link {
  padding: 0;
}

.table.is-narrow td.is-link > a,
.table.is-narrow th.is-link > a {
  padding: 5px 10px;
}

.table.is-striped tbody tr:hover {
  background: #eef2f7;
}

.table.is-striped tbody tr:nth-child(2n) {
  background: #f5f7fa;
}

.table.is-striped tbody tr:nth-child(2n):hover {
  background: #eef2f7;
}
`;
