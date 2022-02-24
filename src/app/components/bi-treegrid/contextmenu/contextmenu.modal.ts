export class ContextMenuDetail {
  label: string;
  icon: string;
  id: number;
  actiontype: string;
  isenable: boolean;
}

export let MainContextMenuVal: ContextMenuDetail[] = [
  {
    label: 'Edit',
    icon: 'edit_outline',
    id: 1,
    actiontype: 'headeraction',
    isenable: false,
  },
  {
    label: 'New',
    icon: 'add_outline',
    id: 2,
    actiontype: 'headeraction',
    isenable: false,
  },
  {
    label: 'Delete',
    icon: 'delete_outline',
    id: 3,
    actiontype: 'headeraction',
    isenable: false,
  },
  {
    label: 'Choose',
    icon: 'task_alt_outline',
    id: 4,
    actiontype: 'headeraction',
    isenable: false,
  },
  {
    label: 'Freeze',
    icon: 'edit_off_outline',
    id: 5,
    actiontype: 'headeraction',
    isenable: false,
  },
  {
    label: 'Filter',
    icon: 'filter_alt_outline',
    id: 6,
    actiontype: 'headeraction',
    isenable: false,
  },
  {
    label: 'MultiSort',
    icon: 'sort_outline',
    id: 7,
    actiontype: 'headeraction',
    isenable: false,
  },
  {
    label: 'AddNext',
    icon: 'add_outline',
    id: 8,
    actiontype: 'tbodyaction',
    isenable: false,
  },
  {
    label: 'AddChild',
    icon: 'add_outline',
    id: 9,
    actiontype: 'tbodyaction',
    isenable: false,
  },
  {
    label: 'Delete',
    icon: 'delete_outline',
    id: 10,
    actiontype: 'tbodyaction',
    isenable: false,
  },
  {
    label: 'Edit',
    icon: 'edit_outline',
    id: 11,
    actiontype: 'tbodyaction',
    isenable: false,
  },
  {
    label: 'MultiSelect',
    icon: 'sort_outline',
    id: 12,
    actiontype: 'tbodyaction',
    isenable: false,
  },
  {
    label: 'Copy',
    icon: 'sort_outline',
    id: 13,
    actiontype: 'tbodyaction',
    isenable: false,
  },
  {
    label: 'Paste',
    icon: 'sort_outline',
    id: 14,
    actiontype: 'tbodyaction',
    isenable: false,
  },
  {
    label: 'PasteNext',
    icon: 'edit_off_outline',
    id: 15,
    actiontype: 'tbodyaction',
    isenable: false,
  },
  {
    label: 'PasteChild',
    icon: 'filter_alt_outline',
    id: 16,
    actiontype: 'tbodyaction',
    isenable: false,
  },
];
