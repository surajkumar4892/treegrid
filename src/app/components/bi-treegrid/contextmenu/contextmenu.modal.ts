export class contextmenudetail {
  label: string;
  icon: string;
  id: number;
  actiontype: string;
  isenable: boolean;
}
export class contextmenudat {
  contextmenudataitem: contextmenudetail[] = [
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
      id: 1,
      actiontype: 'headeraction',
      isenable: false,
    },
    {
      label: 'Delete',
      icon: 'delete_outline',
      id: 1,
      actiontype: 'headeraction',
      isenable: false,
    },
    {
      label: 'Choose',
      icon: 'task_alt_outline',
      id: 1,
      actiontype: 'headeraction',
      isenable: false,
    },
    {
      label: 'Freeze',
      icon: 'edit_off_outline',
      id: 1,
      actiontype: 'headeraction',
      isenable: false,
    },
    {
      label: 'Filter',
      icon: 'filter_alt_outline',
      id: 1,
      actiontype: 'headeraction',
      isenable: false,
    },
    {
      label: 'MultiSort',
      icon: 'sort_outline',
      id: 1,
      actiontype: 'headeraction',
      isenable: false,
    },
  ];
}
