# -*- coding: utf-8 -*-

###########################################################################
## Python code generated with wxFormBuilder (version 3.10.1-0-g8feb16b3)
## http://www.wxformbuilder.org/
##
## PLEASE DO *NOT* EDIT THIS FILE!
###########################################################################

import wx
#import wx.xrc

import gettext
_ = gettext.gettext

###########################################################################
## Class frameMain
###########################################################################

class frameMain (wx.Frame):

	def __init__( self, parent ):
		wx.Frame.__init__ ( self, parent, id = wx.ID_ANY, title = _(u"wxFormBuilder"), pos = wx.DefaultPosition, size = wx.Size( 500,300 ), style = wx.DEFAULT_FRAME_STYLE|wx.TAB_TRAVERSAL )

		self.SetSizeHints( wx.DefaultSize, wx.DefaultSize )

		self.menubarMain = wx.MenuBar( 0 )
		self.menuFile = wx.Menu()
		self.menuItemFileNew = wx.MenuItem( self.menuFile, wx.ID_ANY, _(u"New")+ u"\t" + u"Ctrl+N", wx.EmptyString, wx.ITEM_NORMAL )
		self.menuFile.Append( self.menuItemFileNew )

		self.menuItemFileOpen = wx.MenuItem( self.menuFile, wx.ID_ANY, _(u"Open")+ u"\t" + u"Ctrl+O", wx.EmptyString, wx.ITEM_NORMAL )
		self.menuFile.Append( self.menuItemFileOpen )

		self.menuItemFileSave = wx.MenuItem( self.menuFile, wx.ID_ANY, _(u"Save")+ u"\t" + u"Ctrl+S", wx.EmptyString, wx.ITEM_NORMAL )
		self.menuFile.Append( self.menuItemFileSave )

		self.menuItemFileSaveAs = wx.MenuItem( self.menuFile, wx.ID_ANY, _(u"SaveAs"), wx.EmptyString, wx.ITEM_NORMAL )
		self.menuFile.Append( self.menuItemFileSaveAs )

		self.menuFile.AppendSeparator()

		self.menuItemFileExit = wx.MenuItem( self.menuFile, wx.ID_ANY, _(u"Exit")+ u"\t" + u"Ctrl+X", wx.EmptyString, wx.ITEM_NORMAL )
		self.menuFile.Append( self.menuItemFileExit )

		self.menubarMain.Append( self.menuFile, _(u"File") )

		self.menuEdit = wx.Menu()
		self.menubarMain.Append( self.menuEdit, _(u"Edit") )

		self.menuHelp = wx.Menu()
		self.menubarMain.Append( self.menuHelp, _(u"Help") )

		self.SetMenuBar( self.menubarMain )

		bSizerFrameMain = wx.BoxSizer( wx.VERTICAL )

		bSizerMainFrame = wx.BoxSizer( wx.VERTICAL )

		self.panelMain = wx.Panel( self, wx.ID_ANY, wx.DefaultPosition, wx.DefaultSize, wx.TAB_TRAVERSAL )
		bSizerMainFrame.Add( self.panelMain, 1, wx.EXPAND |wx.ALL, 0 )


		bSizerFrameMain.Add( bSizerMainFrame, 1, wx.ALL|wx.EXPAND, 0 )


		self.SetSizer( bSizerFrameMain )
		self.Layout()

		self.Centre( wx.BOTH )

		# Connect Events
		self.Bind( wx.EVT_MENU, self.menuItemFileNewOnMenuSelection, id = self.menuItemFileNew.GetId() )
		self.Bind( wx.EVT_MENU, self.menuItemFileOpenOnMenuSelection, id = self.menuItemFileOpen.GetId() )
		self.Bind( wx.EVT_MENU, self.menuItemFileSaveOnMenuSelection, id = self.menuItemFileSave.GetId() )
		self.Bind( wx.EVT_MENU, self.menuItemFileSaveAsOnMenuSelection, id = self.menuItemFileSaveAs.GetId() )
		self.Bind( wx.EVT_MENU, self.menuItemFileExitOnMenuSelection, id = self.menuItemFileExit.GetId() )

	def __del__( self ):
		pass


	# Virtual event handlers, override them in your derived class
	def menuItemFileNewOnMenuSelection( self, event ):
		event.Skip()

	def menuItemFileOpenOnMenuSelection( self, event ):
		event.Skip()

	def menuItemFileSaveOnMenuSelection( self, event ):
		event.Skip()

	def menuItemFileSaveAsOnMenuSelection( self, event ):
		event.Skip()

	def menuItemFileExitOnMenuSelection( self, event ):
		event.Skip()



app = wx.App()

wnd = frameMain(None)
wnd.Show()
app.MainLoop()
