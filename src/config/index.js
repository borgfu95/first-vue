const config = {
  DR_SERVER: {
    API: 'http://192.168.17.76:10010',
    ADD_DR: '/dailyStatus',
    GET_DR_BY_DATE: '/dailyStatus/year/{0}/month/{1}/day/{2}',
    GET_USER_DR: '/dailyStatus/engineer/{0}/year/{1}/month/{2}/day/{3}',
    LOGIN: '/user/login',
    REGISTER: '/user/register',
    USER_LIST: '/user/list',
    SEND_MAIL: '/mail/sendMail'
  },
  MAIL_HEADER: '<SPAN lang=EN-US style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Hi Sa&#8217;Ed,<o:p></o:p></SPAN>' +
    '</FONT></P> <P class=MsoNormal style="LAYOUT-GRID-MODE: char; TEXT-ALIGN: left" align=left>' +
    '<FONT color=navy size=1 face=Arial><SPAN lang=EN-US style="FONT-SIZE: 9pt; FONT-FAMILY: Arial; COLOR: navy">' +
    '<o:p>&nbsp;</o:p></SPAN></FONT></P> <P class=MsoNormal style="LAYOUT-GRID-MODE: char; TEXT-ALIGN: left" ' +
    'align=left><FONT size=2 face=Arial><SPAN lang=EN-US style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">' +
    'Following is the summary of today.<o:p></o:p></SPAN></FONT></P>',
  MAIL_TABLE_HEADER: '<TABLE><TR><TD style="BORDER-TOP: black 1pt inset; BORDER-RIGHT: black 1pt inset; ' +
    'BACKGROUND: blue; BORDER-BOTTOM: black 1pt inset; PADDING-BOTTOM: 0.75pt; PADDING-TOP: 0.75pt; ' +
    'PADDING-LEFT: 0.75pt; BORDER-LEFT: black 1pt inset; PADDING-RIGHT: 0.75pt" bgColor=blue>' +
    '<P class=MsoNormal style="TEXT-ALIGN: center" align=center><FONT size=2  face=Arial><SPAN lang=EN-US ' +
    'style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Engineer<o:p></o:p></SPAN></FONT></P></TD><TD ' +
    'style="BORDER-TOP: black 1pt inset; BORDER-RIGHT: black 1pt inset; BACKGROUND: blue; ' +
    'BORDER-BOTTOM: black 1pt inset; PADDING-BOTTOM: 0.75pt; PADDING-TOP: 0.75pt; PADDING-LEFT: 0.75pt; ' +
    'BORDER-LEFT: medium none; PADDING-RIGHT: 0.75pt" bgColor=blue><P class=MsoNormal style="TEXT-ALIGN: center" ' +
    'align=center><FONT size=2 face=Arial><SPAN lang=EN-US style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">' +
    'Feature Worked On<o:p></o:p></SPAN></FONT></P></TD><TD style="BORDER-TOP: black 1pt inset; ' +
    'BORDER-RIGHT: black 1pt inset; BACKGROUND: blue; BORDER-BOTTOM: black 1pt inset; PADDING-BOTTOM: 0.75pt; ' +
    'PADDING-TOP: 0.75pt; PADDING-LEFT: 0.75pt; BORDER-LEFT: medium none; PADDING-RIGHT: 0.75pt" bgColor=blue>' +
    '<P class=MsoNormal style="TEXT-ALIGN: center" align=center><FONT size=2 face=Arial><SPAN lang=EN-US ' +
    'style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Work Item<o:p></o:p></SPAN></FONT></P></TD>' +
    '<TD style="BORDER-TOP: black 1pt inset; BORDER-RIGHT: black 1pt inset; WIDTH: 27.46%; ' +
    'BACKGROUND: blue; BORDER-BOTTOM: black 1pt inset; PADDING-BOTTOM: 0.75pt; PADDING-TOP: 0.75pt; ' +
    'PADDING-LEFT: 0.75pt; BORDER-LEFT: medium none; PADDING-RIGHT: 0.75pt" bgColor=blue width="27%">' +
    '<P class=MsoNormal style="TEXT-ALIGN: center" align=center><FONT size=2 face=Arial><SPAN lang=EN-US ' +
    'style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Plan of Next Work Day<o:p></o:p></SPAN></FONT></P></TD></TR>',
  MAIL_TD: '<TD style="BORDER-TOP: medium none; BORDER-RIGHT: black 1pt inset; ' +
    'BORDER-BOTTOM: black 1pt inset; PADDING-BOTTOM: 0.75pt; PADDING-TOP: 0.75pt; PADDING-LEFT: 0.75pt; ' +
    'BORDER-LEFT: black 1pt inset; PADDING-RIGHT: 0.75pt">{{0}}</TD>',
  MAIL_P: '<P class=MsoNormal style="TEXT-ALIGN: left" align=left><FONT size=2 face=Arial>' +
    '<SPAN lang=EN-US style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">{{0}}<o:p></o:p></SPAN></FONT></P>',
  MAIL_END: '<P class=MsoNormal style="LAYOUT-GRID-MODE: char; TEXT-ALIGN: left" align=left>' +
    '<FONT size=2 face=Arial><SPAN lang=EN-US style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Thanks<o:p></o:p>' +
    '</SPAN></FONT></P><P class=MsoNormal style="LAYOUT-GRID-MODE: char"><FONT size=2 face=Arial>' +
    '<SPAN lang=EN-US style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Borg<o:p></o:p></SPAN></FONT></P>'
}

export default config
