"use strict";

; (function () {
	var isNode = false;

	var PhidgetBase = function PhidgetBase() {
	};

	PhidgetBase.prototype.BP_SETSTATUS = 0
	PhidgetBase.prototype.BP_ACCELERATIONCHANGE = 1
	PhidgetBase.prototype.BP_ANGULARRATEUPDATE = 2
	PhidgetBase.prototype.BP_BACKEMFCHANGE = 3
	PhidgetBase.prototype.BP_CLEAR = 4
	PhidgetBase.prototype.BP_CODE = 5
	PhidgetBase.prototype.BP_COPY = 6
	PhidgetBase.prototype.BP_COUNTCHANGE = 7
	PhidgetBase.prototype.BP_CURRENTCHANGE = 8
	PhidgetBase.prototype.BP_DATA = 9
	PhidgetBase.prototype.BP_DATAINTERVALCHANGE = 10
	PhidgetBase.prototype.BP_DBCHANGE = 11
	PhidgetBase.prototype.BP_DISTANCECHANGE = 12
	PhidgetBase.prototype.BP_DRAWLINE = 13
	PhidgetBase.prototype.BP_DRAWPIXEL = 14
	PhidgetBase.prototype.BP_DRAWRECT = 15
	PhidgetBase.prototype.BP_DUTYCYCLECHANGE = 16
	PhidgetBase.prototype.BP_ERROREVENT = 17
	PhidgetBase.prototype.BP_FIELDSTRENGTHCHANGE = 18
	PhidgetBase.prototype.BP_FLUSH = 19
	PhidgetBase.prototype.BP_FREQUENCYCHANGE = 20
	PhidgetBase.prototype.BP_FREQUENCYDATA = 21
	PhidgetBase.prototype.BP_HUMIDITYCHANGE = 22
	PhidgetBase.prototype.BP_ILLUMINANCECHANGE = 23
	PhidgetBase.prototype.BP_INITIALIZE = 24
	PhidgetBase.prototype.BP_LEARN = 25
	PhidgetBase.prototype.BP_MANCHESTER = 26
	PhidgetBase.prototype.BP_MINDATAINTERVALCHANGE = 27
	PhidgetBase.prototype.BP_PACKET = 28
	PhidgetBase.prototype.BP_POSITIONCHANGE = 29
	PhidgetBase.prototype.BP_POSITIONFIXSTATUSCHANGE = 30
	PhidgetBase.prototype.BP_PRESSURECHANGE = 31
	PhidgetBase.prototype.BP_RAWDATA = 32
	PhidgetBase.prototype.BP_REPEAT = 33
	PhidgetBase.prototype.BP_OPENRESET = 34
	PhidgetBase.prototype.BP_RESETCORRECTIONPARAMETERS = 35
	PhidgetBase.prototype.BP_RESISTANCECHANGE = 36
	PhidgetBase.prototype.BP_SAVECORRECTIONPARAMETERS = 37
	PhidgetBase.prototype.BP_SAVEFRAMEBUFFER = 38
	PhidgetBase.prototype.BP_SENDPACKET = 39
	PhidgetBase.prototype.BP_SETACCELERATION = 40
	PhidgetBase.prototype.BP_SETANTENNAON = 41
	PhidgetBase.prototype.BP_SETBACKEMFSENSINGSTATE = 42
	PhidgetBase.prototype.BP_SETBACKLIGHT = 43
	PhidgetBase.prototype.BP_SETBRAKINGDUTYCYCLE = 44
	PhidgetBase.prototype.BP_SETBRIDGEGAIN = 45
	PhidgetBase.prototype.BP_SETCHANGETRIGGER = 46
	PhidgetBase.prototype.BP_SETCHARACTERBITMAP = 47
	PhidgetBase.prototype.BP_SETCONTRAST = 48
	PhidgetBase.prototype.BP_SETCONTROLMODE = 49
	PhidgetBase.prototype.BP_SETCORRECTIONPARAMETERS = 50
	PhidgetBase.prototype.BP_SETCURRENTLIMIT = 51
	PhidgetBase.prototype.BP_SETCURSORBLINK = 52
	PhidgetBase.prototype.BP_SETCURSORON = 53
	PhidgetBase.prototype.BP_SETDATAINTERVAL = 54
	PhidgetBase.prototype.BP_SETDUTYCYCLE = 55
	PhidgetBase.prototype.BP_SETENABLED = 56
	PhidgetBase.prototype.BP_SETENGAGED = 57
	PhidgetBase.prototype.BP_SETFANMODE = 58
	PhidgetBase.prototype.BP_SETFILTERTYPE = 59
	PhidgetBase.prototype.BP_SETFIRMWAREUPGRADEFLAG = 60
	PhidgetBase.prototype.BP_SETFONTSIZE = 61
	PhidgetBase.prototype.BP_SETFRAMEBUFFER = 62
	PhidgetBase.prototype.BP_SETHOLDINGCURRENTLIMIT = 63
	PhidgetBase.prototype.BP_SETINPUTMODE = 64
	PhidgetBase.prototype.BP_SETIOMODE = 65
	PhidgetBase.prototype.BP_SETSENSITIVITY = 66
	PhidgetBase.prototype.BP_SETLEDCURRENTLIMIT = 67
	PhidgetBase.prototype.BP_SETLEDFORWARDVOLTAGE = 68
	PhidgetBase.prototype.BP_SETMAXPULSEWIDTH = 69
	PhidgetBase.prototype.BP_SETMINPULSEWIDTH = 70
	PhidgetBase.prototype.BP_SETOVERVOLTAGE = 71
	PhidgetBase.prototype.BP_SETPORTMODE = 72
	PhidgetBase.prototype.BP_SETPORTPOWER = 73
	PhidgetBase.prototype.BP_SETPOWERSUPPLY = 74
	PhidgetBase.prototype.BP_SETSONARQUIETMODE = 75
	PhidgetBase.prototype.BP_SETRTDTYPE = 76
	PhidgetBase.prototype.BP_SETRTDWIRESETUP = 77
	PhidgetBase.prototype.BP_SETSCREENSIZE = 78
	PhidgetBase.prototype.BP_SETSENSORTYPE = 79
	PhidgetBase.prototype.BP_SETSLEEP = 80
	PhidgetBase.prototype.BP_SETSPEEDRAMPINGSTATE = 81
	PhidgetBase.prototype.BP_SETSTATE = 82
	PhidgetBase.prototype.BP_SETTARGETPOSITION = 83
	PhidgetBase.prototype.BP_SETTHERMOCOUPLETYPE = 84
	PhidgetBase.prototype.BP_SETVELOCITYLIMIT = 85
	PhidgetBase.prototype.BP_SETVOLTAGE = 86
	PhidgetBase.prototype.BP_SETVOLTAGERANGE = 87
	PhidgetBase.prototype.BP_SONARUPDATE = 88
	PhidgetBase.prototype.BP_SPATIALDATA = 89
	PhidgetBase.prototype.BP_STATECHANGE = 90
	PhidgetBase.prototype.BP_STOPPED = 91
	PhidgetBase.prototype.BP_TAG = 92
	PhidgetBase.prototype.BP_TAGLOST = 93
	PhidgetBase.prototype.BP_TARGETPOSITIONREACHED = 94
	PhidgetBase.prototype.BP_TEMPERATURECHANGE = 95
	PhidgetBase.prototype.BP_TOUCHINPUTVALUECHANGE = 96
	PhidgetBase.prototype.BP_TRANSMIT = 97
	PhidgetBase.prototype.BP_TRANSMITRAW = 98
	PhidgetBase.prototype.BP_TRANSMITREPEAT = 99
	PhidgetBase.prototype.BP_VELOCITYCHANGE = 100
	PhidgetBase.prototype.BP_VOLTAGECHANGE = 101
	PhidgetBase.prototype.BP_VOLTAGERATIOCHANGE = 102
	PhidgetBase.prototype.BP_WRITE = 103
	PhidgetBase.prototype.BP_WRITEBITMAP = 104
	PhidgetBase.prototype.BP_WRITETEXT = 105
	PhidgetBase.prototype.BP_ZERO = 106
	PhidgetBase.prototype.BP_SETCALIBRATIONVALUES = 107
	PhidgetBase.prototype.BP_TIME = 108
	PhidgetBase.prototype.BP_DATE = 109
	PhidgetBase.prototype.BP_HEADINGCHANGE = 110
	PhidgetBase.prototype.BP_CLOSERESET = 111
	PhidgetBase.prototype.BP_SENDFIRMWARE = 112
	PhidgetBase.prototype.BP_PROGRESSCHANGE = 113
	PhidgetBase.prototype.BP_DEVICEINFO = 114
	PhidgetBase.prototype.BP_SENSORCHANGE = 115
	PhidgetBase.prototype.BP_SETSPLRANGE = 116
	PhidgetBase.prototype.BP_DATAIN = 117
	PhidgetBase.prototype.BP_DATAOUT = 118
	PhidgetBase.prototype.BP_SETCURRENTREGULATORGAIN = 119
	PhidgetBase.prototype.BP_SETDEADBAND = 120
	PhidgetBase.prototype.BP_BRAKINGSTRENGTHCHANGE = 121
	PhidgetBase.prototype.BP_SETSENSORVALUECHANGETRIGGER = 122
	PhidgetBase.prototype.BP_DICTIONARYADD = 123
	PhidgetBase.prototype.BP_DICTIONARYADDED = 124
	PhidgetBase.prototype.BP_DICTIONARYUPDATE = 125
	PhidgetBase.prototype.BP_DICTIONARYUPDATED = 126
	PhidgetBase.prototype.BP_DICTIONARYREMOVE = 127
	PhidgetBase.prototype.BP_DICTIONARYREMOVED = 128
	PhidgetBase.prototype.BP_DICTIONARYGET = 129
	PhidgetBase.prototype.BP_DICTIONARYSET = 130
	PhidgetBase.prototype.BP_DICTIONARYREMOVEALL = 131
	PhidgetBase.prototype.BP_DICTIONARYSCAN = 132
	PhidgetBase.prototype.BP_PHCHANGE = 133
	PhidgetBase.prototype.BP_SETCORRECTIONTEMPERATURE = 134
	PhidgetBase.prototype.BP_SETKP = 135
	PhidgetBase.prototype.BP_SETKD = 136
	PhidgetBase.prototype.BP_TOUCHINPUTEND = 137
	PhidgetBase.prototype.BP_REBOOTFIRMWAREUPGRADE = 138
	PhidgetBase.prototype.BP_REBOOT = 139
	PhidgetBase.prototype.BP_WRITELABEL = 140
	PhidgetBase.prototype.BP_SETSTALLVELOCITY = 141
	PhidgetBase.prototype.BP_SETKI = 142

	/* HEADER IS GENERATED BY PhidgetBaseVisitor.js into PhidgetBase.js */

	if (isNode) {
		var url = require('url');
		var net = require('net');
		var btoa = require('btoa');
		var root = global;
	} else {
		var crypto = require('crypto');
		var root = window;
	}

	/*
	 * Add if missing from browser (IE11)
	 */
	if (!String.startsWith) {
		String.prototype.startsWith = function (prefix) {

			return (this.indexOf(prefix) === 0);
		}
	}

	var ConnectionID = 1;		/* ID of next Connection */
	var Connections = {};		/* List of connections */
	var UserPhidgets = {};		/* User Created Phidgets */
	var UserPhidgetID = 1;		/* ID of next User Phidget */

	var Epoch = Date.now();

	function tm() {

		return (Date.now() - Epoch);
	}

	var loglevel = 1;
	function debug(msg) {

		if (loglevel === 0)
			console.log('debug(' + tm() + '): ' + msg);
	}

	function jPhidget_reject(code, msg) {

		var e = new Error(msg);
		e.phidgetReturnCode = code;
		return (Promise.reject(e));
	}

	function getPhidgetConstructor(ch) {

		if (root.jPhidgets[ch.cname])
			return (root.jPhidgets[ch.cname]);
		if (ch.cname.startsWith('Phidget')) {
			var cname = ch.cname.substring(7);
			if (root.jPhidgets[cname])
				return (root.jPhidgets[cname]);
		}
		return (null);
	}

	var jPhidgets = function () {

		var self = {}

		var NET_NAME = "jPhidget"
		if (isNode)
			var NET_TYPE = "www,nodejs";
		else
			var NET_TYPE = "www";
		var NET_MAJOR = 2;
		var NET_MINOR = 0;
		var NET_IDENT = "phidgetclient";

		var P22MSG = {
			Connect: 10,
			Command: 20,
			Device: 30
		}

		var P22SMSG = {
			/* Connect */
			HandShakeC0: 10,
			HandShakeS0: 11,
			AuthC0: 30,
			AuthS0: 31,
			AuthC1: 32,
			AuthS1: 33,
			/* Command */
			Reply: 40,
			KeepAlive: 41,
			/* Device */
			Attach: 50,
			Detach: 55,
			Open: 60,
			Close: 65,
			BridgePkt: 70,
			Channel: 80
		}

		var NR = {
			Magic: 0x50484930,
			Request: 0x01,
			Reply: 0x02,
			Event: 0x04
		}

		function getRandomInt(min, max) {

			return (Math.floor(Math.random() * (max - min)) + min);
		}

		function createSalt(len) {

			if (isNode) {
				var buf = crypto.randomBytes(len);
				return (btoa(buf).substring(len));
			} else {
				var buf = new Int8Array(len);
				if (window.crypto) {
					window.crypto.getRandomValues(buf);
				} else if (root.msCrypto) {
					window.msCrypto.getRandomValues(buf);
				} else {
					Math.seedrandom();
					for (var i = 0; i < len; i++)
						buf[i] = getRandomInt(0, 256);
				}
				return (window.btoa(buf.buffer).substring(len));
			}
		}

		/**************************************************************************************************
		 * ControlPanel
		 */

		var ControlPanel = function (div) {

			var self = this;
			var managers = {};

			this.ppdata = null;

			this.basediv = div;
			this.userdiv = '#' + div;

			var treediv = this.basediv + '_body';
			this.treediv = '#' + treediv;

			var conndiv = div + '_connections';
			this.conndiv = conndiv;

			/* centralize div id creation */
			this.mkDiv = function (obj, arg2) {

				if (obj instanceof Connection)
					return ('conn_' + this.basediv + '_' + obj.id);
				else if (obj instanceof Channel)
					return ('ch_' + this.basediv + '_' + obj.conn.id + '_' + obj.chid);
				else if (obj instanceof Device)
					return ('dev_' + this.basediv + '_' + obj.conn.id + '_' + obj.phid);
				else if (obj === 'port')
					return ('vint_port_' + arg2.parent.phid + '_' + arg2.conn.id + '_' + arg2.hubPort);
			}

			this.mkDialogDiv = function (ch, suffix) {

				return (this.basediv + '_' + ch.getKey() + suffix);
			}

			if (!$.jstree)
				throw ("missing jquery jstree");

			$(this.userdiv).html(
				'<div class="PhidgetControlPanel" id="' + this.basediv + '">' +
				'<div class="PhidgetControlPanelHeader" id="' + this.basediv + '_header"></div>' +
				'<div class="PhidgetControlPanelBody" id="' + this.basediv + '_body"></div>' +
				'<div class="PhidgetControlPanelFooter" id="' + this.basediv + '_footer"></div>' +
				'<div id="' + this.basediv + '_dialogs"></div>' +
				'</div>'
			);

			var tree = {
				core: {
					check_callback: true,
				},
				plugins: ['wholerow', 'contextmenu', 'sort'],
				contextmenu: {
					items: function (node) {
						if (node.id.startsWith('ch_')) {
							if (!node.data || !node.data.obj)
								return ({});
							return ({
								open: {
									label: 'Open',
									action: function (obj) {
										self.openChannel(node);
									}
								}
							});
						} else if (node.id.startsWith('conn_')) {
							var conn = Connections[node.id.substring(6 + self.basediv.length)];
							if (conn.connected) {
								return ({
									close: {
										label: 'Close',
										action: function (obj) {
											this.close();
										}.bind(conn)
									}
								});
							} else {
								return ({
									connect: {
										label: 'Connect',
										action: function (obj) {
											this.connect();
										}.bind(conn)
									}
								});
							}
						}
						return ({});
					}
				},
				sort: function (a, b) {

					return (this.get_text(a) > this.get_text(b) ? 1 : -1);
				}
			};

			/*
			 * Add the Root Node
			 */
			$(this.treediv).jstree(tree);
			var jstree = $(this.treediv).jstree(true);
			var rootNode = {
				id: conndiv,
				text: 'Connections',
				icon: 'net_top.png',
			};
			var res = jstree.create_node(null, rootNode, 'last');

			$(this.treediv).on("changed.jstree", nodeChanged);
			$(this.treediv).on("select_node.jstree", nodeSelected);
			$(this.treediv).dblclick(nodeDoubleClicked);

			/*
			 * Add Connections
			 */
			for (var c in Connections)
				this.add(Connections[c]);

			/*
			 * Create managers to find out about channels.
			 */
			for (var c in Connections) {
				var mgr = managers[Connections[c].id] = Connections[c].createManager({
					onDeviceAttach: function (dev) {
						self.add(dev);
					},
					onDeviceDetach: function (dev) {
						self.remove(dev);
					},
					onAttach: function (ch) {
						self.add(ch);
					},
					onDetach: function (ch) {
						self.remove(ch);
					}
				});
				mgr.open();
			}

			function nodeChanged(e, data) { }

			function nodeSelected(e, data) { }

			function nodeDoubleClicked(e) {

				// XXX For debugging
				//$(self.treediv).jstree("open_all");

				var $node = $(e.target).closest('li');
				var id = $node.attr('id');
				if (!id)
					return;
				if (id.startsWith('ch_')) {
					var node = jstree.get_node(id);
					self.openChannel(node);
				}
			}
		}

		ControlPanel.prototype.openChannel = function (node) {

			var jstree = $(this.treediv).jstree(true);
			var ch = node.data.obj;

			if (node.data.phidget) {
				debug(ch + ' already opening');
				return;
			}
			var cons = getPhidgetConstructor(ch);
			if (cons) {
				var phid = new cons();
				phid.setDeviceSerialNumber(ch.parent.serialNumber);
				phid.setHubPort(ch.parent.hubPort);
				phid.setIsHubPort(ch.parent.isHubPort);
				phid.setChannel(ch.index);
				node.data.phidget = phid
				phid.onError = function (err) {

					if (err.phidgetReturnCode == 7)
						console.log("Unable to open Phidget: Is it already open elsewhere?")

					else
						console.log(err);
				}
				phid.onAttach = function (phid) {
					this.render(phid);
				}.bind(this);
				phid.onDetach = function (phid) {
					if (!phid.isopen)
						return;
					PhidgetPanel.toggle(phid, this.mkDialogDiv(phid.channel, ''));
					delete node.data.phidget;
				}.bind(this);
				phid.open().catch(function (err) {
					console.log(err);
					console.log(err.stack);
				});
			} else {
				throw ('constructor for [' + ch.name + '] not found');
			}
		}

		ControlPanel.prototype.render = function (phid) {

			var self = this;
			if (this.ppdata === null) {
				/*
				 * Load PhidgetPanel.
				 */
				$.get('PhidgetPanel.html', function (data) {
					self.ppdata = data;
					self.render(phid);
				});
				return;
			}

			var key = this.mkDialogDiv(phid.channel, '');

			var ppdiv = $('#' + this.mkDialogDiv(phid.channel, '_phidgetpanel_content'));
			if (ppdiv.length) {
				var example = window[phid.channel.cname + 'Example'];
				if (!example)
					throw (phid.channel.cname + 'Example not found');
				example.setup(phid);
				PhidgetPanel.toggle(phid, key);
				return;
			}

			var ddiv = $('#' + this.mkDialogDiv(phid.channel, '_dialog'));

			var data = this.ppdata.replace(/\$KEY/g, self.basediv + '_' + phid.channel.getKey());
			ddiv.hide();
			ddiv.html(data);
			PhidgetPanel.setup(phid, key);
			PhidgetPanel.toggle(phid, key);

			var ppdiv = $('#' + this.mkDialogDiv(phid.channel, '_phidgetpanel_content'));

			$.get(phid.channel.cname + '.html', function (data) {
				data = data.replace(/\$KEY/g, key);
				ppdiv.empty();
				ppdiv.html(data);
				var example = window[phid.channel.cname + 'Example'];
				if (!example)
					throw (phid.channel.cname + 'Example not found');
				example.setup(phid);

				ddiv.dialog({
					title: phid.channel.name,
					autoOpen: false,
					modal: false,
					show: "blind",
					hide: "blind",
					width: example.width ? example.width : PhidgetPanel.width,
					height: example.height ? example.height : PhidgetPanel.height,
					open: function () {
						debug("opened dialog");
					},
					close: function () {
						if (phid.isopen)
							phid.close();
						ddiv.empty();
					}
				});
				ddiv.show();
				ddiv.dialog('open');
			});
		}

		ControlPanel.prototype.add = function (obj) {

			/*
				if (typeof jQuery.ui === 'undefined')
					throw ('jQuery.ui missing');
			*/

			var jstree = $(this.treediv).jstree(true);

			var nodeid = this.mkDiv(obj);
			var node = jstree.get_node(nodeid);

			/*
			 * If there is a user phidget attached, we are waiting for a device that was attached
			 * and then went away, but was not closed by the control panel; otherwise, this is
			 * a bug.
			 */
			if (node !== false)
				return;

			// Filter out "Hub" channel of VINT Hub, which is only used to set power consumption,
			// set firmware upgrade flag, and calibrate ADC.
			if (obj.channelname && obj.channelname == "PhidgetHub")
				return;

			if (obj instanceof Channel) {
				var ch = obj;

				if (ch.parent.isHub())
					return;

				var node = {
					id: this.mkDiv(ch),
					text: ch.getName() + '(' + ch.index + ')',
					icon: 'vint.png'
				};
				var parent = '#' + this.mkDiv(ch.parent);

				if (node = jstree.create_node(parent, node, 'last'))
					jstree.get_node(node).data = { obj: ch };
				else
					throw ('failed to add new node for channel:' + ch);

				/*
				 * Add the dialog div.
				 */
				var ddiv = this.mkDialogDiv(ch, '_dialog');
				var cdiv = this.mkDialogDiv(ch, '_dialog_content');
				if ($('#' + ddiv).length === 0) {
					var dsdiv = $('#' + this.basediv + '_dialogs');
					dsdiv.append('<div id="' + ddiv + '"><div id="' + cdiv + '"></div></div>');
				}
			} else if (obj instanceof Device) {
				var dev = obj;

				if (dev.label)
					var txt = dev.name + '(' + dev.label + ')';
				else
					var txt = dev.name;

				var node = {
					id: nodeid,
					text: txt,
					icon: 'USB.png'
				};

				if (dev.type === 'VINT') {
					var portid = this.mkDiv('port', dev);
					var port = jstree.get_node(portid);
					if (!port) {
						var parent = '#' + this.mkDiv(dev.parent);
						var pnode = {
							id: portid,
							text: 'Port ' + dev.hubPort,
							icon: 'vint.png'
						};
						portid = jstree.create_node(parent, pnode, 'last');
						if (!portid)
							throw ('failed to add new hub port node');
					}
					if (node = jstree.create_node(portid, node, 'last'))
						jstree.get_node(node).data = { obj: dev };
					else
						throw ('failed to add new node for vint device:' + dev);
				} else {
					if (dev.parent)
						var parent = '#' + this.mkDiv(dev.parent);
					else
						var parent = '#' + this.mkDiv(dev.conn);
					if (node = jstree.create_node(parent, node, 'last'))
						jstree.get_node(node).data = { obj: dev };
					else
						throw ('failed to add new node for device:' + dev);
				}
			} else if (obj instanceof Connection) {
				var conn = obj;

				var node = {
					id: '#' + this.mkDiv(conn),
					text: conn.name,
					icon: 'net.png',
					children: []
				};

				var node = jstree.create_node(this.conndiv, node, 'last');
			}
		}

		ControlPanel.prototype.remove = function (obj) {

			if (obj instanceof Channel || obj instanceof Device) {

				if (obj instanceof Channel && obj.parent.isHub())
					return;

				var jstree = $(this.treediv).jstree(true);
				var nodeid = this.mkDiv(obj);
				var node = jstree.get_node(nodeid);
				if (node === false) {
					console.log('unable to find node for:' + obj + ' (' + nodeid + ')');
					return;
				}

				/*
				 * We do not remove nodes with children just to enforce strict handing of the
				 * tree in the rest of the code.
				 */
				if (!jstree.is_leaf(node)) {
					console.log('node ' + obj + ' still has children!');
					return;
				}
				if (node.data.phidget)
					delete node.data.phidget;
				jstree.delete_node(node);

				/*
				 * Remove the 'Port #' node if it is now empty.
				 */
				if (obj instanceof Device && obj.type === 'VINT') {
					var portid = this.mkDiv('port', obj);
					var node = jstree.get_node(portid);
					if (node === false)
						return;
					if (jstree.is_leaf(node))
						jstree.delete_node(node);
				}

			}
		}

		/**************************************************************************************************
		 * Request
		 */

		/*
		 * Constructor takes either a buffer to parse, or the parameters to create a new request.
		 */
		var Request = function (dataOrLength, flags, reqseq, repseq, type, stype) {

			if (typeof stype !== 'undefined')
				this.buffer = this.render(dataOrLength, flags, reqseq, repseq, type, stype);
			else if (typeof dataOrLength !== 'undefined')
				this.hdrlen = this.parse(dataOrLength);
		}

		Request.prototype.toString = function () {

			return ('{flags:0x' + this.flags.toString(16) + ' len:' + this.len +
				' reqseq:' + this.reqseq + ' repseq:' + this.repseq +
				' type:' + this.type + ' subtype:' + this.stype + '}');
		}

		Request.prototype.parse = function (buf) {

			this.magic = (buf[3] << 24) | (buf[2] << 16) | (buf[1] << 8) | buf[0];
			this.len = (buf[7] << 24) | (buf[6] << 16) | (buf[5] << 8) | buf[4];
			this.flags = (buf[9] << 8) | buf[8];
			this.reqseq = (buf[11] << 8) | buf[10];
			this.repseq = (buf[13] << 8) | buf[12];
			this.type = buf[14];
			this.stype = buf[15];

			if (this.magic != NR.Magic)
				throw ("Bad Request Magic");

			return (16);
		}

		Request.prototype.render = function (len, flags, reqseq, repseq, type, stype) {
			var array = new Uint8Array(16);

			array[3] = (NR.Magic >> 24) & 0xff;
			array[2] = (NR.Magic >> 16) & 0xff;
			array[1] = (NR.Magic >> 8) & 0xff;
			array[0] = NR.Magic & 0xff;
			array[7] = (len >> 24) & 0xff;
			array[6] = (len >> 16) & 0xff;
			array[5] = (len >> 8) & 0xff;
			array[4] = len & 0xff;
			array[9] = (flags >> 8) & 0xff;
			array[8] = flags & 0xff;
			array[11] = (reqseq >> 8) & 0xff;
			array[10] = reqseq & 0xff;
			array[13] = (repseq >> 8) & 0xff;
			array[12] = repseq & 0xff;
			array[14] = type;
			array[15] = stype;

			return (array);
		}

		/**************************************************************************************************
		 * BridgePacket
		 */

		var BridgePacket = function (conn, req, data) {

			this.conn = conn;
			this.req = req;

			if (data) {
				this.version = data.v;
				this.source = data.s;
				this.flags = data.f;
				this.vpkt = data.p;
				this.chid = data.O;	/* the id of the channel that we opened */
				this.channel = conn.getChannel(this.chid);
				this.channelIndex = data.X;
				this.entryCount = data.c;
				this.entries = data.e;
			} else {
				this.version = 0;
				this.source = 2;	/* JSON */
				this.flags = 0;
				this.entryCount = 0;
				this.entries = {};
			}
		}
		BridgePacket.prototype = Object.create(PhidgetBase.prototype);
		BridgePacket.prototype.constructor = BridgePacket;

		BridgePacket.prototype.NUMBER = 1;
		BridgePacket.prototype.FLOAT = 2;
		BridgePacket.prototype.STRING = 3;
		BridgePacket.prototype.ARRAY = 4;
		BridgePacket.prototype.JSON = 5;
		BridgePacket.prototype.F_EVENT = 0x01;

		BridgePacket.prototype.isEvent = function () {

			if (this.flags & this.F_EVENT)
				return (true);
			return (false);
		}

		BridgePacket.prototype.validType = function (type) {

			switch (type) {
				case 'c':
				case 'h':
				case 'u':
				case 'uh':
				case 'ul':
				case 'd':
				case 'l':
				case 'f':
				case 'g':
				case 's':
				case 'R':
				case 'I':
				case 'U':
				case 'J':
					return (true);
				default:
					return (false);
			}
		}

		BridgePacket.prototype.entryType = function (e) {

			switch (e.type) {
				case 'c':
				case 'h':
				case 'uh':
				case 'd':
				case 'u':
				case 'l':
				case 'ul':
					return (this.NUMBER);
				case 'f':
				case 'g':
					return (this.FLOAT);
				case 's':
					return (this.STRING);
				case 'R':
				case 'I':
				case 'G':
				case 'U':
					return (this.ARRAY);
				case 'J':
					return (this.JSON);
				default:
					return (-1);
			}
		}

		BridgePacket.prototype.convertType = function (e) {

			switch (this.entryType(e)) {
				case this.NUMBER:
					var n = parseInt(e.value);
					if (!isNaN(n))
						return (n);
					if (typeof e.value === 'boolean') {
						if (e.value)
							return (1);
						return (0);
					}
					break;
				case this.FLOAT:
					var n = parseFloat(e.value);
					if (!isNaN(n))
						return (n);
					if (typeof e.value === 'boolean') {
						if (e.value)
							return (1.0);
						return (0.0);
					}
					break;
				case this.STRING:
					if (typeof e.value !== 'string')
						return ('' + e.value);
					return (e.value);
				case this.JSON:
					if (typeof e.value === 'object')
						return (e.value);
					break;
				case this.ARRAY:
					if (Array.isArray(e.value))
						return (e.value);
					break;
			}
			throw ('invalid value [' + e.value + '] for type [' + e.type + ']');
		}

		BridgePacket.prototype.set = function (val) {

			if (typeof val === 'undefined')
				throw ('invalid argument');
			if (typeof val.name === 'undefined')
				throw ('missing name');
			if (typeof val.type === 'undefined')
				throw ('missing type');
			if (typeof val.value === 'undefined')
				throw ('missing value');

			if (val.name in this.entries)
				throw ('value [' + val.name + '] already set');

			if (!this.validType(val.type))
				throw ('invalid type [' + val.type + ']');

			var v = this.convertType(val);

			var e = {
				t: val.type,
				v: v
			};
			this.entries[val.name] = e;
			this.entryCount++;
		}

		BridgePacket.prototype.send = function (ch, vpkt) {

			var self = ch;

			if (typeof vpkt === 'string')
				vpkt = this[vpkt];

			if (!ch.isopen)
				throw ('channel is not open');

			var json = JSON.stringify({
				v: this.version,
				s: this.source,
				f: this.flags,
				p: vpkt,
				I: ch.parent.phid,
				X: ch.uniqueIndex,
				c: this.entryCount,
				e: this.entries
			});

			return (ch.conn.sendRequest(0, 0, 0, P22MSG.Device, P22SMSG.BridgePkt, json));
		}

		BridgePacket.prototype.deliver = function () {

			if (!this.channel)
				throw ('Bridge packet missing channel');
			if (this.channel.isopen === false) {
				debug('deliver event to closed channel');
				return; /* this event was delivered, but we are not open to receive it */
			}

			try {
				/* Send a reply if this is not an event, and is not setStatus() */
				if (!this.isEvent() && this.vpkt !== 0)
					this.conn.sendReply(this.req.reqseq, this.req.type, this.req.stype, []);
				this.channel.userphid.bridgeInput(this);
			} catch (e) {
				if (this.channel.userphid.onError)
					this.channel.userphid.onError(e);
				throw (e); // XXX This isn't ideal
			}
		}

		BridgePacket.prototype.get = function (name) {

			if (this.entries.hasOwnProperty(name))
				return (this.entries[name].v);
			return (undefined);
		}

		/**************************************************************************************************
		 * Device
		 */
		var Device = function (conn, data) {

			this.conn = conn;

			this.type = data.type;
			this.phid = data.phid;
			this.parent = conn.getDevice(data.parent);
			this.pphid = data.parent;
			this.vendorID = data.vendorID;
			this.productID = data.productID;
			this.deviceID = data.deviceID;
			this.serialNumber = data.serialNumber;
			this.label = data.label;
			this.version = data.version;
			this.interfaceNum = data.interfaceNum;
			this.index = data.index;
			this.hubPort = data.hubPort;
			this.isHubPort = data.isHubPort !== 0;
			this.desc = data.desc;
			this.name = data.name;

			if (this.type === 'VINT')
				this.vintID = data.vintID;
		}

		Device.prototype.isHub = function () {

			return (this.deviceID === 63);
		}

		Device.prototype.toString = function () {

			return ('DEV[' + this.pphid + '/' + this.phid + '] ' + this.name);
		}

		/**************************************************************************************************
		 * Channel
		 */
		var Channel = function (conn, dev, data) {

			var self = this;

			this.listeners = [];

			this.conn = conn;
			this.isopen = false;

			this.isHubPort = dev.isHubPort;

			this.parent = dev;
			this.chid = data.chid;
			this.name = data.name;
			this.channelname = data.channelname;
			if (this.channelname.startsWith('Phidget'))
				this.cname = this.channelname.substring(7);
			else
				this.cname = this.channelname;
			this.class = data.class;
			this.uniqueIndex = data.uniqueIndex;
			this.index = data.index;
			this.cpversion = data.version;	/* communication proto version, not device version! */
		}

		Channel.prototype.getKey = function () {

			var key = this.parent.serialNumber + '_' + this.cname + '_' + this.index;
			if (this.parent.type === 'VINT')
				key += this.parent.hubPort + '_' + this.isHubPort;

			return (key);
		}

		Channel.prototype.getName = function () {

			return (this.name);
		}

		Channel.prototype.match = function (phid) {

			if (phid.class !== this.class)
				return (false);

			if (phid._serialNumber != undefined && phid._serialNumber !== -1) {
				if (phid._serialNumber != this.parent.serialNumber)
					return (false);
			}

			if (phid._channel != undefined) {
				if (phid._channel != this.index)
					return (false);
			}

			if (phid._hubPort != undefined && phid._hubPort !== -1) {
				if (phid._hubPort != this.parent.hubPort)
					return (false);
			}

			if (phid._isHubPort !== undefined) {
				if (phid._isHubPort !== this.isHubPort)
					return (false);
			}

			if (phid._deviceLabel !== undefined && phid._deviceLabel !== null) {
				if (phid._deviceLabel !== this.parent.label)
					return (false);
			}

			debug("matched:" + phid + " -> " + this);
			return (true);
		}

		Channel.prototype.onDetach = function () {

			if (this.isopen) {
				/*
				 * Flag that we are closing because of a device detach.
				 * This prevents Channel.close() from executing against a detached device.
				 */
				this.detaching = true;
				this.userphid._close(this.userphid);
				delete this.userphid.channel;

				this.isopen = false;
				delete this.userphid;
				delete this.detaching;
			}
		}

		Channel.prototype.closing = function (phid) {

			if (!this.isopen)
				throw ('closing called when not attached; ch:' + this + ' phid:' + phid);
			if (this.userphid !== phid)
				throw ('closing called with wrong phid; ch:' + this + ' phid:' + phid);

			this.userphid.isopen = false;
			delete ch.userphid.channel;

			ch.isopen = false;
			delete ch.userphid;
		}

		Channel.prototype.open = function (phid) {

			var self = this;

			phid.attaching = true;

			var json = JSON.stringify({
				phid: this.parent.phid,
				channel: this.chid,
				class: this.class,
				index: this.uniqueIndex,
				version: this.cpversion
			});

			return (new Promise(function (resolve, reject) {
				self.conn.sendRequest(0, 0, 0, P22MSG.Device, P22SMSG.Open, json).then(function (status) {
					phid.attaching = false;
					self.isopen = true;
					self.userphid = phid;

					/* deliver the status data */
					var bp = new BridgePacket(self.conn, null, status);
					try {
						bp.deliver();
					} catch (e) {
						reject(e);
						return;
					}

					phid.wasOpened(self);
					resolve();
				}).catch(function (err) {
					reject(err);
				});
			}));
		}

		/*
		 * Currently only expected to be called from Phidget.close().
		 * We do not notify the Phidget.
		 */
		Channel.prototype.close = function () {

			if (this.detaching)
				return (Promise.resolve());

			var json = JSON.stringify({
				phid: this.parent.phid,
				index: this.uniqueIndex,
			});

			return (this.conn.sendRequest(0, 0, 0, P22MSG.Device, P22SMSG.Close, json));
		}

		Channel.prototype.toString = function () {

			return ('CH[' + this.parent.phid + '/' + this.cname + '(' + this.index + ')] ' + this.name);
		}

		/**************************************************************************************************
		 * Phidget
		 *  Combines a Channel/Device into a logical Phidget
		 */
		var Phidget = function Phidget(cls) {

			var self = this;
			this.name = 'Phidget';	/* should be updated by actual implementation of a class */

			this._isHubPort = false;	/* do not open hub ports by default */

			this.id = UserPhidgetID++;
			this.class = cls;
			this.attaching = false;	/* in the process of being attached to a server channel */
			this.useropen = false;	/* user called open: registered to attached to a channel */
			this.isopen = false;	/* attached to a channel */
			this.channel = null;

			this.onAttach = function (phid) { };
			this.onDetach = function (phid) { };

			this.wasOpened = function (ch) {

				self.channel = ch;
				self.isopen = true;
				self.onopen(self);
			}
		}
		Phidget.prototype = Object.create(PhidgetBase.prototype);
		Phidget.prototype.constructor = Phidget;

		Phidget.prototype.openTimedOut = function () {

			this.close();
			this.onerror(new Error('open timed out'));
		}

		/* Phidget API */
		Phidget.prototype.open = function (_timeout) {

			if (this.useropen)
				return (Promise.reject(new Error('Phidget already opened by user')));
			if (this.isopen)
				return (Promise.reject(new Error('Phidget already opened')));;

			var self = this;

			if (_timeout) {
				var timeout = parseInt(_timeout);
				if (!isNaN(timeout))
					this.openTimeout = timeout;
			}

			UserPhidgets[this.id] = this;
			this.useropen = true;
			this.openTime = tm();
			scanChannels(this);

			return (new Promise(function (resolve, reject) {
				self.onopen = function () {
					self.onAttach(self);
					resolve(self);
				};
				self.onerror = function (err) {
					reject(err);
				};
			}));
		}

		/* Phidget API */
		Phidget.prototype.close = function () {

			debug("closing phidget");
			this.useropen = false;

			return (this._close());
		}

		Phidget.prototype._close = function () {

			if (this.isopen)
				var closePromise = this.channel.close();

			delete this.openTimeout;
			delete this.openTime;

			/*
			 * If we are called because the device is detaching, do not deregister, and
			 * flag as user opened.
			 */
			if (this.channel != undefined && !this.channel.detaching) {
				if (this.id in UserPhidgets)
					delete UserPhidgets[this.id];
			} else {
				this.useropen = true;
			}

			if (this.isopen) {
				this.onDetach(this);
				this.isopen = false;
			}

			if (typeof closePromise !== 'undefined')
				return (closePromise);
			return (Promise.resolve());
		}

		Phidget.prototype.handleSetStatus = function (bp, version) {

			if (!('data' in this))
				this['data'] = {};

			for (var e in bp.entries)
				this.data[e] = bp.entries[e].v;

			if (this.data['_class_version_'] !== version)
				throw (new Error(this.name + ' version (' + this.data['_class_version_'] +
					') does not match (' + version + ')'));
		}

		Phidget.prototype.checkOpen = function () {

			if (!this.isopen)
				throw ("phidget is not open");
		}

		/* Phidget API */
		Phidget.prototype.getAttached = function () {

			return (this.isopen);
		}

		/* same as getAttached(), but is used in existing software so we kept it */
		Phidget.prototype.isAttached = function () {

			return (this.isopen);
		}

		/* Phidget API */
		Phidget.prototype.setChannel = function (ch) {

			ch = parseInt(ch);
			if (!isNaN(ch))
				this._channel = ch;
		}

		/* Phidget API */
		Phidget.prototype.getChannel = function () {

			if (this.channel == undefined)
				return (this._channel);
			return (this.channel.index);
		}

		/* Phidget API */
		Phidget.prototype.getChannelClass = function () {

			this.checkOpen();
			return (this.channel.class);
		}

		/* Phidget API */
		Phidget.prototype.getChannelClassName = function () {

			this.checkOpen();
			return (this.channel.name);
		}

		/* Phidget API */
		Phidget.prototype.getChannelName = function () {

			this.checkOpen();
			return (this.channel.name);
		}

		/* Phidget API */
		Phidget.prototype.getChannelSubclass = function () {

			throw (new Error('not supported'));
		}

		/* Phidget API */
		Phidget.prototype.getDeviceClass = function () {

			return (0);
		}

		/* Phidget API */
		Phidget.prototype.getDeviceClassName = function () {

			this.checkOpen()
			return (this.channel.parent.name);
		}

		/* Phidget API */
		Phidget.prototype.getDeviceID = function () {

			this.checkOpen()
			return (this.channel.parent.deviceID);
		}

		/* Phidget API */
		Phidget.prototype.setDeviceLabel = function (label) {

			this._deviceLabel = label;
		}

		/* Phidget API */
		Phidget.prototype.getDeviceLabel = function () {

			if (!this.channel)
				return (this._deviceLabel ? this._deviceLabel : '');
			return (this.channel.parent.label);
		}

		/* Phidget API */
		Phidget.prototype.getDeviceName = function () {

			this.checkOpen()
			return (this.channel.parent.name);
		}

		/* Phidget API */
		Phidget.prototype.getDeviceSKU = function () {

			return (0);
		}

		/* Phidget API */
		Phidget.prototype.setDeviceSerialNumber = function (sn) {

			sn = parseInt(sn);
			if (!isNaN(sn))
				this._serialNumber = sn;
		}

		/* Phidget API */
		Phidget.prototype.getDeviceSerialNumber = function () {

			if (!this.channel)
				return (this._serialNumber);
			return (this.channel.parent.serialNumber);
		}

		/* Phidget API */
		Phidget.prototype.getDeviceVersion = function () {

			this.checkOpen()
			return (this.channel.parent.version);
		}

		/* Phidget API */
		Phidget.prototype.setHubPort = function (hubPort) {

			hubPort = parseInt(hubPort);
			if (!isNaN(hubPort))
				this._hubPort = hubPort;
		}

		/* Phidget API */
		Phidget.prototype.getHubPort = function () {

			if (!this.channel)
				return (this._hubPort);
			return (this.channel.parent.hubPort);
		}

		/* Phidget API */
		Phidget.prototype.setIsHubPortDevice = function (is) {

			this._isHubPort = !!is;
		}

		/* Phidget API */
		Phidget.prototype.getIsHubPortDevice = function () {

			if (!this.channel)
				return (this._isHubPort);
			return (this.channel.isHubPort);
		}

		/* Phidget API */
		Phidget.prototype.setIsHubPort = function (isHubPort) {

			this._isHubPort = !!isHubPort;
		}

		/* Phidget API */
		Phidget.prototype.getHub = function () {

			this.checkOpen()

			return (this.channel.conn.getDevice(this.channel.parent.parent));
		}

		/* Phidget API */
		Phidget.prototype.getIsChannel = function () {

			return (true);
		}

		/* Phidget API */
		Phidget.prototype.getParent = function () {

			if (this.channel)
				return (this.channel.parent);
			return (undefined);
		}

		Phidget.prototype.isVINT = function () {

			if (this.channel)
				return (this.channel.parent.type === 'VINT');
			return (false);
		}

		Phidget.prototype.toString = function () {

			return (this.name);
		}

		/**************************************************************************************************
		 * Manager
		 */
		var Manager = function (conn) {

			this.conn = conn;
			this.isopen = false;

			this.onDeviceAttach = function (dev) { };
			this.onDeviceDetach = function (dev) { };
			this.onAttach = function (ch) { };
			this.onDetach = function (ch) { };
		}

		Manager.prototype.delete = function () {

			if (!this.conn)
				throw ("Manager has been deleted");

			var idx = this.conn.Managers.indexOf(this);
			if (idx != -1)
				this.conn.Managers.splice(idx, 1);
			delete this.conn;
		}

		Manager.prototype.open = function () {

			if (!this.conn)
				return (Promise.reject(new Error('Manager has been deleted')));

			if (this.isopen)
				return (Promise.resolve(this));

			for (var c in this.conn.Channels)
				this.onAttach(this.conn.Channels[c]);

			this.isopen = true;

			return (Promise.resolve(this));
		}

		Manager.prototype.close = function () {

			if (!this.conn)
				throw ("Manager has been deleted");

			this.isopen = false;
		}

		/**************************************************************************************************
		 * Connection
		 */

		/* internal functions */

		/*
		 * WebSocket onmessage
		 */
		var Connection_ws_onmessage = function (event) {

			this.onmessage(event.data);
		}

		/* NodeJS socket onmessage
		 *
		 * Receives data from the socket and processes it.
		 *
		 * The server writes data faster than we can read it a lot of times, and these need to be handled
		 * in order, so there doesn't seem to be a good (easy) way to not block everything while packets
		 * are being processed.  If this does turn out to be a problem, we could pack the data into the
		 * request object, and make an array of those to be fired by setTimer(x, 0).
		 */
		var Connection_sock_onmessage = function (data) {

			var HDRLEN = 16;

			var len = data.length;
			var wdata = data;

			if (this.sockdatalen > 0) {
				var bufs = [this.sockdata, wdata];
				wdata = Buffer.concat(bufs, this.sockdata.length + wdata.length);
				this.sockdata = null;
				this.sockdatalen = 0;
				len = wdata.length;
			}

			if (len >= HDRLEN) {
				do {
					var req = new Request(wdata);

					/*
					 * Short circuit if the length matches exactly.
					 */
					if (len === req.len + HDRLEN) {
						this.onmessage(wdata, req);
						return;
					}

					/*
					 * The payload isn't here yet.
					 */
					if (len < req.len + HDRLEN)
						break;

					/*
					 * We've got more than enough data.
					 */
					var d = wdata.slice(0, req.len + HDRLEN);
					wdata = wdata.slice(req.len + HDRLEN);
					len -= d.length;

					this.onmessage(d, req);
				} while (len >= HDRLEN);
			}

			if (len > 0) {
				this.sockdata = wdata;
				this.sockdatalen = wdata.length;
			}
		}

		var Connection = function (uri, cfg) {

			if (isNode) {
				var u = url.parse(uri);
				if (u.protocol === 'ws:')
					throw ('websocket not supported with node.js, use "phid://server:port"');
				if (u.protocol !== 'phid:')
					throw ('expected phidget protocol, use "phid://server:port"');
				this.hostname = u.hostname;
				this.port = u.port;
			}

			this.id = ConnectionID++;
			Connections[this.id] = this;

			this.generation = 0;

			this.TIMEOUT = 5000;

			this.connected = false;	/* currently connected */
			this.stayopen = false;	/* want to be connected */

			this.name = uri;
			this.uri = uri;
			this.websocket = false;
			this.ws = null;
			this.sock = null;
			this.sockdata = null;
			this.sockdatalen = 0;
			this.nonceC = null;
			this.passwd = '';

			this.Channels = {};
			this.Devices = {};		/* O(1) access -- as far as we are concerned */
			this.DeviceList = [];	/* maintain order discovered */
			this.Managers = [];

			this.reqseq = 10;		/* request sequence counter */
			this.requests = {};		/* outstanding requests */

			this.oChannel = null;	/* channel being opened */
			this.cChannel = null;	/* channel being closed */

			this.onclose = function () {
				debug("connection closed");
			}

			this.onError = function (err, msg) {
				console.log(msg + ':0x' + err.toString(16));
			}

			/*
			 * Handle user config after basic setup.
			 */
			if (cfg) {
				if (cfg.name)
					this.name = cfg.name;

				if (cfg.onConnect && typeof cfg.onConnect === 'function')
					this.onConnect = cfg.onConnect;

				if (cfg.onClose && typeof cfg.onClose === 'function')
					this.onClose = cfg.onClose;

				if (cfg.passwd)
					this.passwd = cfg.passwd;
			}

			this.onattach = function (dev) {

				for (var m in this.Managers)
					if (this.Managers[m].isopen)
						this.Managers[m].onDeviceAttach(dev);
			}

			this.ondetach = function (dev) {

				for (var m in this.Managers)
					if (this.Managers[m].isopen)
						this.Managers[m].onDeviceDetach(dev);
			}

			this.onchannelattach = function (ch) {

				for (var m in this.Managers)
					if (this.Managers[m].isopen)
						this.Managers[m].onAttach(ch);

				/*
				 * Determine if any user phidgets match this new channel.
				 */
				scanUserPhidgets(ch);
			}

			this.onchanneldetach = function (ch) {

				for (var m in this.Managers)
					if (this.Managers[m].isopen)
						this.Managers[m].onDetach(ch);

				ch.onDetach();
			}

			this.matchPhidget = function (phid) {

				for (var c in this.Channels) {
					if (this.Channels[c].match(phid)) {
						this.Channels[c].open(phid).catch(function (err) {
							if (this.onError)
								this.onError(err);
							console.log(err);
							console.log(err.stack);

						}.bind(phid));
						return (true);
					}
				}
				return (false);
			}

			this.onerror = function (err) {

				debug("connection error:" + err);
			}

			this.onevent = function (event) { debug("event:" + event); }

			/*
			 * Creates the request if necessary, and routes the message to the correct handler.
			 */
			this.onmessage = function (data, req) {

				var array = new Uint8Array(data);

				if (!req)
					req = new Request(array);

				if (req.len > 0) {
					if (isNode)
						var tmp1 = data.slice(req.hdrlen);
					else
						var tmp1 = new Uint8Array(array.buffer, req.hdrlen, req.len);
					var tmp2 = String.fromCharCode.apply(null, tmp1);
					data = JSON.parse(tmp2);
				}

				if (this.connected)
					return (this.ondatamessage(data, req));
				else
					return (this.onauthmessage(data, req));
			}

			/*
			 * Try to handle getting no reply back from the server gracefully.
			 */
			this.checkRequests = function () {
				for (var r in this.requests) {
					/* throw away requests left from a previous connection */
					if (this.requests[r].generation != this.generation) {
						delete this.requests[r];
						continue;
					}
					var req = this.requests[r];
					if (tm() - req.time > this.TIMEOUT) {
						try {
							req.onTimeout();
						} catch (e) {
							console.log(e);
						} finally {
							delete this.requests[r];
						}
					}
				}
			}
			this._xid = setInterval(this.checkRequests.bind(this), 2000);
		}

		Connection.prototype.setKeepAlive = function (timeout) {

			var to = parseInt(timeout);
			if (isNaN(to))
				throw (new Exception('invalid keep alive:' + timeout));

			this.TIMEOUT = to;
		}

		Connection.prototype.delete = function () {

			if (this.connected) {
				this.onError(root.PhidgetReturnCode.EPHIDGET_BUSY, 'close connection before deleting');
				return (false);
			}

			delete Connections[this.id];
			return (true);
		}

		Connection.prototype.createManager = function (obj) {

			var m = new Manager(this);
			if (obj) {
				if (typeof obj === 'function') {
					m.onAttach = obj;
				} else {
					if ('onDeviceAttach' in obj && typeof obj.onDeviceAttach === 'function')
						m.onDeviceAttach = obj.onDeviceAttach;
					if ('onDeviceDetach' in obj && typeof obj.onDeviceDetach === 'function')
						m.onDeviceDetach = obj.onDeviceDetach;
					if ('onAttach' in obj && typeof obj.onAttach === 'function')
						m.onAttach = obj.onAttach;
					if ('onDetach' in obj && typeof obj.onDetach === 'function')
						m.onDetach = obj.onDetach;
				}
			}
			this.Managers.push(m);
			return (m);
		}

		Connection.prototype.getChannel = function (chid) {

			if (this.Channels[chid] === undefined)
				throw (new Error('invalid channel id:' + chid));
			return (this.Channels[chid]);
		}

		Connection.prototype.getDevice = function (phid) {

			if (!this.Devices[phid])
				return (null);
			return (this.Devices[phid]);
		}

		Connection.prototype.close = function () {

			this.stayopen = false;
			return (this.closesocket());
		}

		Connection.prototype.closesocket = function () {

			this.connected = false;
			if (this.ws != undefined) {
				try {
					this.ws.close();
				} catch (ex) { }
			} else if (this.sock != undefined) {
				try {
					this.sock.destroy();
					this.sock.unref();
				} catch (ex) { }
			}
			this.ws = undefined;
			this.sock = undefined;
			this.generation++;
			return (Promise.resolve());
		}

		Connection.prototype.send = function (hdr, data) {

			var self = this;
			var err = false;
			return (new Promise(function (resolve, reject) {
				try {
					if (self.websocket) {
						if (!self.ws || self.ws.readyState != WebSocket.OPEN)
							reject(new Error('invalid websocket state'));
						self.ws.send(hdr);
						if (data.length > 0)
							self.ws.send(data);
					} else {
						if (!self.sock)
							reject(new Error('invalid socket'));
						var buffer = new Buffer(hdr.byteLength);
						for (var i = 0; i < hdr.length; i++)
							buffer[i] = hdr[i];
						self.sock.write(buffer);
						if (data.length > 0)
							self.sock.write(data);
					}
				} catch (ex) {
					ex.phidgetReturnCode = root.PhidgetReturnCode.EPHIDGET_UNEXPECTED;
					err = true;
					reject(ex);
				} finally {
					if (!err)
						resolve();
				}
			}));
		}

		Connection.prototype.getNextRequestSequence = function () {

			if (this.reqseq >= 65535)
				this.reqseq = 10;

			this.reqseq++;
			return (this.reqseq);
		}

		Connection.prototype.sendRequest = function (flags, reqseq, repseq, type, stype, data) {

			var self = this;

			if (reqseq === 0) {

				reqseq = this.getNextRequestSequence();
			}

			return (new Promise(function (resolve, reject) {
				self.requests[reqseq] = {
					generation: self.generation,
					time: tm(),
					onReply: function (res) {
						if (res.E !== undefined) {
							if (res.E !== 0) {
								var e = new Error('Request ' + type + '/' + stype + ' failed:' + res.E);
								e.phidgetReturnCode = res.E;
								reject(e);
							} else {
								resolve(res.R);
							}
						} else {
							resolve(res);
						}
					},
					onTimeout: function () {
						reject(new Error('request ' + reqseq + ':' + repseq + ' ' + type + '/' + stype +
							' timed out:' + tm() + ':' + self.requests[reqseq].time));
					},
					onError: function (err, msg) {
						var e = new Error(msg);
						e.phidgetReturnCode = e;
						reject(e);
					}
				};

				try {
					var req = new Request(data.length, flags, reqseq, repseq, type, stype);
					self.send(req.buffer, data);
				} catch (ex) {
					reject(ex);
				}
			}));
		}

		Connection.prototype.sendReply = function (repseq, type, stype, data) {

			var NRF_REPLY = 0x0002;

			var reqseq = this.getNextRequestSequence();

			var req = new Request(data.length, NRF_REPLY, reqseq, repseq, type, stype);
			return (this.send(req.buffer, data));
		}

		Connection.prototype.maintainConnection = function () {

			this.connected = true;
			this.stayopen = true;

			if (this.connectionMaintainer !== undefined)
				return;

			this.connectionMaintainer = setInterval(function () {

				if (this.connected === true || this.stayopen !== true)
					return;

				this.connect();
			}.bind(this), 4000);
		}

		Connection.prototype.connect = function () {

			if (this.connected === true)
				return (Promise.resolve(this));

			var self = this;

			return (new Promise(function (resolve, reject) {

				function whenconnected() {

					self.handshake().then(() => {
						self.maintainConnection();
						resolve();
					}).catch(err => {
						reject(err);
					});
				}

				try {
					if (isNode) {
						if (self.sock) {
							try {
								self.sock.close();
							} catch (e) { }
							delete self.sock;
						}

						self.sock = new net.Socket();
						self.sock.on('data', Connection_sock_onmessage.bind(self));
						self.sock.on('close', self.doclose.bind(self));
						self.sock.on('error', function (arg) {
							console.log('socket error (' + arg + ')');
							this.doclose();
						}.bind(self));
						self.sock.on('connect', whenconnected.bind(self));

						self.sock.connect({ host: self.hostname, port: self.port });
					} else {
						if (self.ws) {
							try {
								self.ws.close();
							} catch (e) { }
							delete self.ws;
						}
						self.websocket = true;
						self.ws = new WebSocket(self.uri);
						self.ws.onopen = whenconnected.bind(self);
						self.ws.onclose = self.doclose.bind(self);
						self.ws.onmessage = Connection_ws_onmessage.bind(self);
						self.ws.onerror = function (arg) {
							console.log('socket error (server unavailable?)');
							this.doclose();
						}.bind(self);
						self.ws.binaryType = 'arraybuffer';
					}
				} catch (e) {
					e.phidgetReturnCode = root.PhidgetReturnCode.EPHIDGET_UNEXPECTED;
					reject(e);
				}

			}));
		}

		Connection.prototype.doclose = function () {

			while (this.DeviceList.length > 0)
				this.deviceDetach(this.DeviceList[this.DeviceList.length - 1]);

			this.closesocket();
			this.onclose();
		}

		Connection.prototype.onauthmessage = function (data, req) {

			if (this.authdata === undefined)
				console.log('packet recieved while not connected and authdata is not defined');
			else
				this.authdata(data);
		}

		Connection.prototype.ondatamessage = function (data, req) {

			var request = this.requests[req.repseq];
			if (request) {
				delete this.requests[req.repseq];
				request.onReply(data);
			}

			/*
			 * Replies do not require additional processing, but there must have been a request
			 * object registered.
			 */
			if (req.flags & NR.Reply) {
				if (request === undefined)
					this.onError(root.PhidgetReturnCode.EPHIDGET_UNEXPECTED,
						'No handler registered for reply:' + req);
				return;
			}

			switch (req.type) {
				case P22MSG.Command:
					var p = this.handleCommand(req, data);
					break;
				case P22MSG.Device:
					var p = this.handleDevice(req, data);
					break;
				case P22MSG.Channel:
					var p = this.handleChannel(req, data);
					break;
				default:
					var p = jPhidget_reject(root.PhidgetReturnCode.EPHIDGET_INVALID,
						'Unknown request type:' + req.type);
			}
			if (p) {
				p.catch(err => {
					this.onError(err);
				});
			}
		}

		Connection.prototype.handleCommand = function (req, data) {

			switch (req.stype) {
				case P22SMSG.KeepAlive:
					this.sendReply(req.reqseq, P22MSG.Command, P22SMSG.KeepAlive, []);
					break;
				default:
					return (jPhidget_reject(root.PhidgetReturnCode.EPHIDGET_UNEXPECTED,
						'Unknown command subrequest:' + req.stype));
			}
		}

		Connection.prototype.handleDevice = function (req, data) {

			switch (req.stype) {
				case P22SMSG.Attach:
					return (this.handleDeviceAttach(req, data));
				case P22SMSG.Detach:
					return (this.handleDeviceDetach(req, data));
				case P22SMSG.BridgePkt:
					return (this.handleBridgePacket(req, data));
				case P22SMSG.Channel:
					return (this.handleChannel(req, data));
				default:
					return (jPhidget_reject(root.PhidgetReturnCode.EPHIDGET_UNEXPECTED,
						'Unknown device subrequest:' + req.stype));
			}
		}

		Connection.prototype.handleDeviceAttach = function (req, data) {

			var dev = new Device(this, data);
			if (dev.phid in this.Devices)
				return (jPhidget_reject(root.PhidgetReturnCode.EPHIDGET_DUPLICATE, 'duplicate device:' + dev));

			this.Devices[dev.phid] = dev;
			this.DeviceList.push(dev);
			this.onattach(dev);

			return (Promise.resolve());
		}

		Connection.prototype.handleDeviceDetach = function (req, data) {
			var dev;

			dev = this.getDevice(data.phid);
			if (dev !== -1)
				this.deviceDetach(dev);

			return (Promise.resolve());
		}

		Connection.prototype.deviceDetach = function (dev) {

			if (!(dev.phid in this.Devices))
				return (jPhidget_reject(root.PhidgetReturnCode.EPHIDGET_NOENT, 'no such device:' + dev));

			for (var ch in this.Channels) {
				if (this.Channels[ch].parent === dev) {
					this.onchanneldetach(this.Channels[ch]);
					delete this.Channels[ch];
				}
			}

			this.ondetach(dev);
			delete this.Devices[dev.phid];
			this.DeviceList.splice(this.DeviceList.indexOf(dev), 1);

			return (Promise.resolve());
		}

		Connection.prototype.handleChannel = function (req, data) {
			var dev;
			var ch;

			dev = this.getDevice(data.parent);
			if (dev === null)
				return (jPhidget_reject(root.PhidgetReturnCode.EPHIDGET_UNEXPECTED, 'missing channel parent'));

			ch = new Channel(this, dev, data);
			this.Channels[ch.chid] = ch;
			this.onchannelattach(ch);

			return (Promise.resolve());
		}

		Connection.prototype.handleBridgePacket = function (req, data) {

			var bp = new BridgePacket(this, req, data);
			return (bp.deliver());
		}

		Connection.prototype.handshake = function () {

			var self = this;

			return (new Promise((resolve, reject) => {
				var json = JSON.stringify({
					name: NET_NAME, type: NET_TYPE, pmajor: NET_MAJOR,
					pminor: NET_MINOR
				});
				var req = new Request(json.length, 0, 0, 0, P22MSG.Connect, P22SMSG.HandShakeC0);
				this.send(req.buffer, json).catch(err => {
					reject(err);
				});

				this.authdata = function (data) {
					if (data.result !== 0) {
						var err = new Error('server rejected handshake');
						err.phidgetReturnCode = data.result;
						reject(err);
						return;
					}

					/* start authentication */
					this.nonceC = createSalt(16);

					var json = JSON.stringify({ ident: NET_IDENT, nonceC: this.nonceC });
					var req = new Request(json.length, 0, 0, 0, P22MSG.Connect, P22SMSG.AuthC0);
					this.send(req.buffer, json).catch(err => {
						reject(err);
					});

					this.authdata = function (data) {
						if (data.result !== 0) {
							var err = new Error('authentication failed');
							err.phidgetReturnCode = data.result;
							reject(err);
							return;
						}

						if (this.nonceC != data.nonceC) {
							reject(new Error('Authentication Failure: nonce do not match (' +
								this.nonceC + ') vs (' + data.nonceC + ')'));
							return;
						}

						var challenge = NET_IDENT + this.passwd + this.nonceC + data.nonceS + data.salt;
						var proof = this.hash(challenge);
						var json = JSON.stringify({ nonceC: this.nonceC, nonceS: data.nonceS, proof: proof });

						req = new Request(json.length, 0, 0, 0, P22MSG.Connect, P22SMSG.AuthC1);
						this.send(req.buffer, json).catch(err => {
							reject(err);
						});

						this.authdata = function (data) {
							if (data.E != 0) {
								var err = new Error('authentication failed: server rejected proof');
								err.phidgetReturnCode = data.E;
								reject(err);
								return;
							}
							this.connected = true; // prevent packets from being missed
							delete this.authdata;
							resolve();
						}
					};
				};
			}));
		}

		Connection.prototype.hash = function (challenge) {

			// if (isNode) {
			var sha = crypto.createHash('sha256');
			sha.update(challenge);
			return (sha.digest('base64'));
			// }

			var digest = Sha256.hash(challenge);

			var bin = '';
			for (var i = 0; i < digest.length; i += 2) {
				var b = parseInt(digest.substring(i, i + 2), 16);
				bin += String.fromCharCode(b);
			}

			return (window.btoa(bin));
		}

		/**************************************************************************************************
		 * Exported Classes
		 */
		self.ControlPanel = ControlPanel;
		self.BridgePacket = BridgePacket;
		self.Connection = Connection;
		self.Phidget = Phidget;
		self.Channel = Channel;
		self.Device = Device;

		function scanChannels(phid) {

			for (var c in Connections) {
				if (Connections[c].matchPhidget(phid))
					return;
			}
		}

		function scanUserPhidgets(ch) {

			for (var ph in UserPhidgets) {
				var phid = UserPhidgets[ph];

				if (phid.attaching === true || phid.isopen === true)
					continue;

				if (ch === undefined) {
					if (scanChannels(phid) === true)
						return;
				} else if (ch.match(phid)) {
					ch.open(phid).catch(function (err) {
						if (this.onError)
							this.onError(err);
						console.log(err);
						console.log(err.stack);
					}.bind(phid));
					return;
				}
			}
		}

		setInterval(function () {

			scanUserPhidgets();
		}, 1000);

		setInterval(function () {
			for (var ph in UserPhidgets) {
				var phid = UserPhidgets[ph];
				if (phid.isopen)
					continue;
				if (phid.openTimeout == undefined)
					continue;
				if (tm() - phid.openTime > phid.openTimeout)
					phid.openTimedOut();
			}
		}, 500);

		/* Phidget API */
		self.getLibraryVersion = function () {

			return ("Phidget 22 1.0.0");
		}

		/* Phidget API */
		self.getJSLibraryVersion = function () {

			return ("1.0");
		}

		/* REMAINER IS GENERATED BY EnumVisitor.js into Enumerations.js */


		var AccelerometerBase = function AccelerometerBase() {
			Phidget.apply(this, arguments);
			this.name = "Accelerometer";
			this.class = 1;

			this.onAccelerationChange = function (acceleration, timestamp) { };
			this.onError = function (code, desc) { };
		};
		AccelerometerBase.prototype = Object.create(Phidget.prototype);
		AccelerometerBase.prototype.constructor = AccelerometerBase;

		AccelerometerBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		AccelerometerBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		AccelerometerBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 1 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
				case 0x1: // BP_ACCELERATIONCHANGE
					this.handleAccelerationChangeEvent(bp);
					break;
			}
			return (true);
		};

		AccelerometerBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0x2e: // BP_SETCHANGETRIGGER
					this.data.accelerationChangeTrigger = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('AccelerationChangeTrigger');
					return (true);
				case 0x36: // BP_SETDATAINTERVAL
					this.data.dataInterval = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('DataInterval');
					return (true);
			}
		}

		AccelerometerBase.prototype.getAcceleration = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.acceleration);
		};

		AccelerometerBase.prototype.getMinAcceleration = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minAcceleration);
		};

		AccelerometerBase.prototype.getMaxAcceleration = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxAcceleration);
		};

		AccelerometerBase.prototype.getAccelerationChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.accelerationChangeTrigger);
		};

		AccelerometerBase.prototype.setAccelerationChangeTrigger = function (accelerationChangeTrigger) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: accelerationChangeTrigger });
			var self = this;
			return (bp.send(this.channel, "BP_SETCHANGETRIGGER").then(function (res) {
				self.data.accelerationChangeTrigger = accelerationChangeTrigger;
			}));
		};

		AccelerometerBase.prototype.getMinAccelerationChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minAccelerationChangeTrigger);
		};

		AccelerometerBase.prototype.getMaxAccelerationChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxAccelerationChangeTrigger);
		};

		AccelerometerBase.prototype.getAxisCount = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.axisCount);
		};

		AccelerometerBase.prototype.getDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.dataInterval);
		};

		AccelerometerBase.prototype.setDataInterval = function (dataInterval) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "u", value: dataInterval });
			var self = this;
			return (bp.send(this.channel, "BP_SETDATAINTERVAL").then(function (res) {
				self.data.dataInterval = dataInterval;
			}));
		};

		AccelerometerBase.prototype.getMinDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minDataInterval);
		};

		AccelerometerBase.prototype.getMaxDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxDataInterval);
		};

		AccelerometerBase.prototype.getTimestamp = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.timestamp);
		};

		AccelerometerBase.prototype.handleAccelerationChangeEvent = function (bp) {

			this.data.acceleration = bp.get("0");
			this.data.timestamp = bp.get("1");

			this.onAccelerationChange(this.data.acceleration, this.data.timestamp);
		};

		var Accelerometer = function Accelerometer() {
			AccelerometerBase.apply(this, arguments);
		};
		Accelerometer.prototype = Object.create(AccelerometerBase.prototype);
		Accelerometer.prototype.constructor = Accelerometer;
		self.Accelerometer = Accelerometer;

		var BLDCMotorBase = function BLDCMotorBase() {
			Phidget.apply(this, arguments);
			this.name = "BLDCMotor";
			this.class = 35;

			this.onBrakingStrengthChange = function (brakingStrength) { };
			this.onPositionChange = function (position) { };
			this.onVelocityUpdate = function (velocity) { };
			this.onError = function (code, desc) { };
		};
		BLDCMotorBase.prototype = Object.create(Phidget.prototype);
		BLDCMotorBase.prototype.constructor = BLDCMotorBase;

		BLDCMotorBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		BLDCMotorBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		BLDCMotorBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 0 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
				case 0x79: // BP_BRAKINGSTRENGTHCHANGE
					this.handleBrakingStrengthChangeEvent(bp);
					break;
				case 0x1d: // BP_POSITIONCHANGE
					this.handlePositionChangeEvent(bp);
					break;
				case 0x10: // BP_DUTYCYCLECHANGE
					this.handleVelocityUpdateEvent(bp);
					break;
			}
			return (true);
		};

		BLDCMotorBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0x28: // BP_SETACCELERATION
					this.data.acceleration = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('Acceleration');
					return (true);
				case 0x36: // BP_SETDATAINTERVAL
					this.data.dataInterval = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('DataInterval');
					return (true);
				case 0x8d: // BP_SETSTALLVELOCITY
					this.data.stallVelocity = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('StallVelocity');
					return (true);
				case 0x2c: // BP_SETBRAKINGDUTYCYCLE
					this.data.targetBrakingStrength = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('TargetBrakingStrength');
					return (true);
				case 0x37: // BP_SETDUTYCYCLE
					this.data.targetVelocity = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('TargetVelocity');
					return (true);
			}
		}

		BLDCMotorBase.prototype.getAcceleration = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.acceleration);
		};

		BLDCMotorBase.prototype.setAcceleration = function (acceleration) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: acceleration });
			var self = this;
			return (bp.send(this.channel, "BP_SETACCELERATION").then(function (res) {
				self.data.acceleration = acceleration;
			}));
		};

		BLDCMotorBase.prototype.getMinAcceleration = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minAcceleration);
		};

		BLDCMotorBase.prototype.getMaxAcceleration = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxAcceleration);
		};

		BLDCMotorBase.prototype.getBrakingStrength = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.brakingStrength);
		};

		BLDCMotorBase.prototype.getMinBrakingStrength = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minBrakingStrength);
		};

		BLDCMotorBase.prototype.getMaxBrakingStrength = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxBrakingStrength);
		};

		BLDCMotorBase.prototype.getDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.dataInterval);
		};

		BLDCMotorBase.prototype.setDataInterval = function (dataInterval) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "u", value: dataInterval });
			var self = this;
			return (bp.send(this.channel, "BP_SETDATAINTERVAL").then(function (res) {
				self.data.dataInterval = dataInterval;
			}));
		};

		BLDCMotorBase.prototype.getMinDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minDataInterval);
		};

		BLDCMotorBase.prototype.getMaxDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxDataInterval);
		};

		BLDCMotorBase.prototype.getRescaleFactor = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.rescaleFactor);
		};

		BLDCMotorBase.prototype.getTargetBrakingStrength = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.targetBrakingStrength);
		};

		BLDCMotorBase.prototype.setTargetBrakingStrength = function (targetBrakingStrength) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: targetBrakingStrength });
			var self = this;
			return (bp.send(this.channel, "BP_SETBRAKINGDUTYCYCLE").then(function (res) {
				self.data.targetBrakingStrength = targetBrakingStrength;
			}));
		};

		BLDCMotorBase.prototype.getTargetVelocity = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.targetVelocity);
		};

		BLDCMotorBase.prototype.setTargetVelocity = function (targetVelocity) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: targetVelocity });
			var self = this;
			return (bp.send(this.channel, "BP_SETDUTYCYCLE").then(function (res) {
				self.data.targetVelocity = targetVelocity;
			}));
		};

		BLDCMotorBase.prototype.getVelocity = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.velocity);
		};

		BLDCMotorBase.prototype.getMinVelocity = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minVelocity);
		};

		BLDCMotorBase.prototype.getMaxVelocity = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxVelocity);
		};

		BLDCMotorBase.prototype.handleBrakingStrengthChangeEvent = function (bp) {

			this.data.brakingStrength = bp.get("0");

			this.onBrakingStrengthChange(this.data.brakingStrength);
		};

		BLDCMotorBase.prototype.handlePositionChangeEvent = function (bp) {

			this.data.position = bp.get("0");

			this.onPositionChange(this.data.position);
		};

		BLDCMotorBase.prototype.handleVelocityUpdateEvent = function (bp) {

			this.data.velocity = bp.get("0");

			this.onVelocityUpdate(this.data.velocity);
		};

		var BLDCMotor = function BLDCMotor() {
			BLDCMotorBase.apply(this, arguments);
		};
		BLDCMotor.prototype = Object.create(BLDCMotorBase.prototype);
		BLDCMotor.prototype.constructor = BLDCMotor;
		self.BLDCMotor = BLDCMotor;


		BLDCMotor.prototype.getPosition = function () {

			// ** Generated: Requires Review **
			return (this.data.position);
		};

		BLDCMotor.prototype.getMinPosition = function () {

			// ** Generated: Requires Review **
			return (this.data.minPosition);
		};

		BLDCMotor.prototype.getMaxPosition = function () {

			// ** Generated: Requires Review **
			return (this.data.maxPosition);
		};

		BLDCMotor.prototype.addPositionOffset = function (positionOffset) {
		};

		BLDCMotor.prototype.setRescaleFactor = function (rescaleFactor) {

			// ** Generated: Requires Review **
			this.data.rescaleFactor = rescaleFactor;
		};

		BLDCMotor.prototype.getStallVelocity = function () {

			// ** Generated: Requires Review **
			return (this.data.stallVelocity);
		};

		BLDCMotor.prototype.setStallVelocity = function (stallVelocity) {

			// ** Generated: Requires Review **
			bp.set({ name: "stallVelocity", type: "g", value: stallVelocity });
			var bp = new BridgePacket(this.channel.conn);
			bp.send(this.channel, "BP_SETSTALLVELOCITY", function () {
				this.data.stallVelocity = stallVelocity;
				if (typeof this.setStallVelocitySuccess === "function")
					this.setStallVelocitySuccess(stallVelocity);
			}.bind(this));
		};

		BLDCMotor.prototype.getMinStallVelocity = function () {

			// ** Generated: Requires Review **
			return (this.data.minStallVelocity);
		};

		BLDCMotor.prototype.getMaxStallVelocity = function () {

			// ** Generated: Requires Review **
			return (this.data.maxStallVelocity);
		};

		var CapacitiveTouchBase = function CapacitiveTouchBase() {
			Phidget.apply(this, arguments);
			this.name = "CapacitiveTouch";
			this.class = 14;

			this.onTouch = function (touchValue) { };
			this.onTouchEnd = function () { };
			this.onError = function (code, desc) { };
		};
		CapacitiveTouchBase.prototype = Object.create(Phidget.prototype);
		CapacitiveTouchBase.prototype.constructor = CapacitiveTouchBase;

		CapacitiveTouchBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		CapacitiveTouchBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		CapacitiveTouchBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 2 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
				case 0x60: // BP_TOUCHINPUTVALUECHANGE
					this.handleTouchEvent(bp);
					break;
				case 0x89: // BP_TOUCHINPUTEND
					this.handleTouchEndEvent(bp);
					break;
			}
			return (true);
		};

		CapacitiveTouchBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0x36: // BP_SETDATAINTERVAL
					this.data.dataInterval = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('DataInterval');
					return (true);
				case 0x42: // BP_SETSENSITIVITY
					this.data.sensitivity = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('Sensitivity');
					return (true);
				case 0x2e: // BP_SETCHANGETRIGGER
					this.data.touchValueChangeTrigger = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('TouchValueChangeTrigger');
					return (true);
			}
		}

		CapacitiveTouchBase.prototype.getDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.dataInterval);
		};

		CapacitiveTouchBase.prototype.setDataInterval = function (dataInterval) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "u", value: dataInterval });
			var self = this;
			return (bp.send(this.channel, "BP_SETDATAINTERVAL").then(function (res) {
				self.data.dataInterval = dataInterval;
			}));
		};

		CapacitiveTouchBase.prototype.getMinDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minDataInterval);
		};

		CapacitiveTouchBase.prototype.getMaxDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxDataInterval);
		};

		CapacitiveTouchBase.prototype.getIsTouched = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (!!this.data.isTouched);
		};

		CapacitiveTouchBase.prototype.getSensitivity = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.sensitivity);
		};

		CapacitiveTouchBase.prototype.setSensitivity = function (sensitivity) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: sensitivity });
			var self = this;
			return (bp.send(this.channel, "BP_SETSENSITIVITY").then(function (res) {
				self.data.sensitivity = sensitivity;
			}));
		};

		CapacitiveTouchBase.prototype.getMinSensitivity = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minSensitivity);
		};

		CapacitiveTouchBase.prototype.getMaxSensitivity = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxSensitivity);
		};

		CapacitiveTouchBase.prototype.getTouchValue = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.touchValue);
		};

		CapacitiveTouchBase.prototype.getMinTouchValue = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minTouchValue);
		};

		CapacitiveTouchBase.prototype.getMaxTouchValue = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxTouchValue);
		};

		CapacitiveTouchBase.prototype.getTouchValueChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.touchValueChangeTrigger);
		};

		CapacitiveTouchBase.prototype.setTouchValueChangeTrigger = function (touchValueChangeTrigger) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: touchValueChangeTrigger });
			var self = this;
			return (bp.send(this.channel, "BP_SETCHANGETRIGGER").then(function (res) {
				self.data.touchValueChangeTrigger = touchValueChangeTrigger;
			}));
		};

		CapacitiveTouchBase.prototype.getMinTouchValueChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minTouchValueChangeTrigger);
		};

		CapacitiveTouchBase.prototype.getMaxTouchValueChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxTouchValueChangeTrigger);
		};

		CapacitiveTouchBase.prototype.handleTouchEvent = function (bp) {

			this.data.touchValue = bp.get("0");

			this.onTouch(this.data.touchValue);
		};

		CapacitiveTouchBase.prototype.handleTouchEndEvent = function (bp) {


			this.onTouchEnd();
		};

		var CapacitiveTouch = function CapacitiveTouch() {
			CapacitiveTouchBase.apply(this, arguments);
		};
		CapacitiveTouch.prototype = Object.create(CapacitiveTouchBase.prototype);
		CapacitiveTouch.prototype.constructor = CapacitiveTouch;
		self.CapacitiveTouch = CapacitiveTouch;

		var CurrentInputBase = function CurrentInputBase() {
			Phidget.apply(this, arguments);
			this.name = "CurrentInput";
			this.class = 2;

			this.onCurrentChange = function (current) { };
			this.onError = function (code, desc) { };
		};
		CurrentInputBase.prototype = Object.create(Phidget.prototype);
		CurrentInputBase.prototype.constructor = CurrentInputBase;

		CurrentInputBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		CurrentInputBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		CurrentInputBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 0 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
				case 0x8: // BP_CURRENTCHANGE
					this.handleCurrentChangeEvent(bp);
					break;
			}
			return (true);
		};

		CurrentInputBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0x2e: // BP_SETCHANGETRIGGER
					this.data.currentChangeTrigger = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('CurrentChangeTrigger');
					return (true);
				case 0x36: // BP_SETDATAINTERVAL
					this.data.dataInterval = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('DataInterval');
					return (true);
				case 0x4a: // BP_SETPOWERSUPPLY
					this.data.powerSupply = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('PowerSupply');
					return (true);
			}
		}

		CurrentInputBase.prototype.getCurrent = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.current);
		};

		CurrentInputBase.prototype.getMinCurrent = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minCurrent);
		};

		CurrentInputBase.prototype.getMaxCurrent = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxCurrent);
		};

		CurrentInputBase.prototype.getCurrentChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.currentChangeTrigger);
		};

		CurrentInputBase.prototype.setCurrentChangeTrigger = function (currentChangeTrigger) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: currentChangeTrigger });
			var self = this;
			return (bp.send(this.channel, "BP_SETCHANGETRIGGER").then(function (res) {
				self.data.currentChangeTrigger = currentChangeTrigger;
			}));
		};

		CurrentInputBase.prototype.getMinCurrentChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minCurrentChangeTrigger);
		};

		CurrentInputBase.prototype.getMaxCurrentChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxCurrentChangeTrigger);
		};

		CurrentInputBase.prototype.getDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.dataInterval);
		};

		CurrentInputBase.prototype.setDataInterval = function (dataInterval) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "u", value: dataInterval });
			var self = this;
			return (bp.send(this.channel, "BP_SETDATAINTERVAL").then(function (res) {
				self.data.dataInterval = dataInterval;
			}));
		};

		CurrentInputBase.prototype.getMinDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minDataInterval);
		};

		CurrentInputBase.prototype.getMaxDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxDataInterval);
		};

		CurrentInputBase.prototype.getPowerSupply = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.powerSupply);
		};

		CurrentInputBase.prototype.setPowerSupply = function (powerSupply) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: powerSupply });
			var self = this;
			return (bp.send(this.channel, "BP_SETPOWERSUPPLY").then(function (res) {
				self.data.powerSupply = powerSupply;
			}));
		};

		CurrentInputBase.prototype.handleCurrentChangeEvent = function (bp) {

			this.data.current = bp.get("0");

			this.onCurrentChange(this.data.current);
		};

		var CurrentInput = function CurrentInput() {
			CurrentInputBase.apply(this, arguments);
		};
		CurrentInput.prototype = Object.create(CurrentInputBase.prototype);
		CurrentInput.prototype.constructor = CurrentInput;
		self.CurrentInput = CurrentInput;

		var DataAdapterBase = function DataAdapterBase() {
			Phidget.apply(this, arguments);
			this.name = "DataAdapter";
			this.class = 3;

			this.onPacket = function (data, length, overrun) { };
			this.onError = function (code, desc) { };
		};
		DataAdapterBase.prototype = Object.create(Phidget.prototype);
		DataAdapterBase.prototype.constructor = DataAdapterBase;

		DataAdapterBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		DataAdapterBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		DataAdapterBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 1 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
				case 0x75: // BP_DATAIN
					this.handlePacketEvent(bp);
					break;
			}
			return (true);
		};

		DataAdapterBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
			}
		}

		DataAdapterBase.prototype.getMaxPacketLength = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxPacketLength);
		};

		DataAdapterBase.prototype.handlePacketEvent = function (bp) {

			var data = bp.get("0");
			var length = bp.get("1");
			var overrun = !!bp.get("2");

			this.onPacket(data, length, overrun);
		};

		var DataAdapter = function DataAdapter() {
			DataAdapterBase.apply(this, arguments);
		};
		DataAdapter.prototype = Object.create(DataAdapterBase.prototype);
		DataAdapter.prototype.constructor = DataAdapter;
		self.DataAdapter = DataAdapter;


		DataAdapter.prototype.sendPacket = function (data) {
		};

		var DCMotorBase = function DCMotorBase() {
			Phidget.apply(this, arguments);
			this.name = "DCMotor";
			this.class = 4;

			this.onBrakingStrengthChange = function (brakingStrength) { };
			this.onVelocityUpdate = function (velocity) { };
			this.onBackEMFChange = function (backEMF) { };
			this.onError = function (code, desc) { };
		};
		DCMotorBase.prototype = Object.create(Phidget.prototype);
		DCMotorBase.prototype.constructor = DCMotorBase;

		DCMotorBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		DCMotorBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		DCMotorBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 0 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
				case 0x3: // BP_BACKEMFCHANGE
					this.handleBackEMFChangeEvent(bp);
					break;
				case 0x79: // BP_BRAKINGSTRENGTHCHANGE
					this.handleBrakingStrengthChangeEvent(bp);
					break;
				case 0x10: // BP_DUTYCYCLECHANGE
					this.handleVelocityUpdateEvent(bp);
					break;
			}
			return (true);
		};

		DCMotorBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0x28: // BP_SETACCELERATION
					this.data.acceleration = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('Acceleration');
					return (true);
				case 0x2a: // BP_SETBACKEMFSENSINGSTATE
					this.data.backEMFSensingState = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('BackEMFSensingState');
					return (true);
				case 0x33: // BP_SETCURRENTLIMIT
					this.data.currentLimit = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('CurrentLimit');
					return (true);
				case 0x77: // BP_SETCURRENTREGULATORGAIN
					this.data.currentRegulatorGain = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('CurrentRegulatorGain');
					return (true);
				case 0x36: // BP_SETDATAINTERVAL
					this.data.dataInterval = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('DataInterval');
					return (true);
				case 0x3a: // BP_SETFANMODE
					this.data.fanMode = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('FanMode');
					return (true);
				case 0x2c: // BP_SETBRAKINGDUTYCYCLE
					this.data.targetBrakingStrength = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('TargetBrakingStrength');
					return (true);
				case 0x37: // BP_SETDUTYCYCLE
					this.data.targetVelocity = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('TargetVelocity');
					return (true);
			}
		}

		DCMotorBase.prototype.getAcceleration = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.acceleration);
		};

		DCMotorBase.prototype.setAcceleration = function (acceleration) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: acceleration });
			var self = this;
			return (bp.send(this.channel, "BP_SETACCELERATION").then(function (res) {
				self.data.acceleration = acceleration;
			}));
		};

		DCMotorBase.prototype.getMinAcceleration = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minAcceleration);
		};

		DCMotorBase.prototype.getMaxAcceleration = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxAcceleration);
		};

		DCMotorBase.prototype.getBackEMF = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.backEMF);
		};

		DCMotorBase.prototype.getBackEMFSensingState = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (!!this.data.backEMFSensingState);
		};

		DCMotorBase.prototype.setBackEMFSensingState = function (backEMFSensingState) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: backEMFSensingState });
			var self = this;
			return (bp.send(this.channel, "BP_SETBACKEMFSENSINGSTATE").then(function (res) {
				self.data.backEMFSensingState = backEMFSensingState;
			}));
		};

		DCMotorBase.prototype.getBrakingStrength = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.brakingStrength);
		};

		DCMotorBase.prototype.getMinBrakingStrength = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minBrakingStrength);
		};

		DCMotorBase.prototype.getMaxBrakingStrength = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxBrakingStrength);
		};

		DCMotorBase.prototype.getCurrentLimit = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.currentLimit);
		};

		DCMotorBase.prototype.setCurrentLimit = function (currentLimit) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: currentLimit });
			var self = this;
			return (bp.send(this.channel, "BP_SETCURRENTLIMIT").then(function (res) {
				self.data.currentLimit = currentLimit;
			}));
		};

		DCMotorBase.prototype.getMinCurrentLimit = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minCurrentLimit);
		};

		DCMotorBase.prototype.getMaxCurrentLimit = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxCurrentLimit);
		};

		DCMotorBase.prototype.getCurrentRegulatorGain = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.currentRegulatorGain);
		};

		DCMotorBase.prototype.setCurrentRegulatorGain = function (currentRegulatorGain) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: currentRegulatorGain });
			var self = this;
			return (bp.send(this.channel, "BP_SETCURRENTREGULATORGAIN").then(function (res) {
				self.data.currentRegulatorGain = currentRegulatorGain;
			}));
		};

		DCMotorBase.prototype.getMinCurrentRegulatorGain = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minCurrentRegulatorGain);
		};

		DCMotorBase.prototype.getMaxCurrentRegulatorGain = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxCurrentRegulatorGain);
		};

		DCMotorBase.prototype.getDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.dataInterval);
		};

		DCMotorBase.prototype.setDataInterval = function (dataInterval) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "u", value: dataInterval });
			var self = this;
			return (bp.send(this.channel, "BP_SETDATAINTERVAL").then(function (res) {
				self.data.dataInterval = dataInterval;
			}));
		};

		DCMotorBase.prototype.getMinDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minDataInterval);
		};

		DCMotorBase.prototype.getMaxDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxDataInterval);
		};

		DCMotorBase.prototype.getFanMode = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.fanMode);
		};

		DCMotorBase.prototype.setFanMode = function (fanMode) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: fanMode });
			var self = this;
			return (bp.send(this.channel, "BP_SETFANMODE").then(function (res) {
				self.data.fanMode = fanMode;
			}));
		};

		DCMotorBase.prototype.getTargetBrakingStrength = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.targetBrakingStrength);
		};

		DCMotorBase.prototype.setTargetBrakingStrength = function (targetBrakingStrength) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: targetBrakingStrength });
			var self = this;
			return (bp.send(this.channel, "BP_SETBRAKINGDUTYCYCLE").then(function (res) {
				self.data.targetBrakingStrength = targetBrakingStrength;
			}));
		};

		DCMotorBase.prototype.getTargetVelocity = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.targetVelocity);
		};

		DCMotorBase.prototype.setTargetVelocity = function (targetVelocity) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: targetVelocity });
			var self = this;
			return (bp.send(this.channel, "BP_SETDUTYCYCLE").then(function (res) {
				self.data.targetVelocity = targetVelocity;
			}));
		};

		DCMotorBase.prototype.getVelocity = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.velocity);
		};

		DCMotorBase.prototype.getMinVelocity = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minVelocity);
		};

		DCMotorBase.prototype.getMaxVelocity = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxVelocity);
		};

		DCMotorBase.prototype.handleBackEMFChangeEvent = function (bp) {

			this.data.backEMF = bp.get("0");

			this.onBackEMFChange(this.data.backEMF);
		};

		DCMotorBase.prototype.handleBrakingStrengthChangeEvent = function (bp) {

			this.data.brakingStrength = bp.get("0");

			this.onBrakingStrengthChange(this.data.brakingStrength);
		};

		DCMotorBase.prototype.handleVelocityUpdateEvent = function (bp) {

			this.data.velocity = bp.get("0");

			this.onVelocityUpdate(this.data.velocity);
		};

		var DCMotor = function DCMotor() {
			DCMotorBase.apply(this, arguments);
		};
		DCMotor.prototype = Object.create(DCMotorBase.prototype);
		DCMotor.prototype.constructor = DCMotor;
		self.DCMotor = DCMotor;

		var DictionaryBase = function DictionaryBase() {
			Phidget.apply(this, arguments);
			this.name = "Dictionary";
			this.class = 36;

			this.onAdd = function (key, value) { };
			this.onUpdate = function (key, value) { };
			this.onRemove = function (key) { };
			this.onError = function (code, desc) { };
		};
		DictionaryBase.prototype = Object.create(Phidget.prototype);
		DictionaryBase.prototype.constructor = DictionaryBase;

		DictionaryBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		DictionaryBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		DictionaryBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 0 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
				case 0x7c: // BP_DICTIONARYADDED
					this.handleAddEvent(bp);
					break;
				case 0x80: // BP_DICTIONARYREMOVED
					this.handleRemoveEvent(bp);
					break;
				case 0x7e: // BP_DICTIONARYUPDATED
					this.handleUpdateEvent(bp);
					break;
			}
			return (true);
		};

		DictionaryBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
			}
		}

		DictionaryBase.prototype.add = function (key, value) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "s", value: key });
			bp.set({ name: "1", type: "s", value: value });
			return (bp.send(this.channel, "BP_DICTIONARYADD"));
		};

		DictionaryBase.prototype.removeAll = function () {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			return (bp.send(this.channel, "BP_DICTIONARYREMOVEALL"));
		};

		DictionaryBase.prototype.remove = function (key) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "s", value: key });
			return (bp.send(this.channel, "BP_DICTIONARYREMOVE"));
		};

		DictionaryBase.prototype.set = function (key, value) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "s", value: key });
			bp.set({ name: "1", type: "s", value: value });
			return (bp.send(this.channel, "BP_DICTIONARYSET"));
		};

		DictionaryBase.prototype.update = function (key, value) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "s", value: key });
			bp.set({ name: "1", type: "s", value: value });
			return (bp.send(this.channel, "BP_DICTIONARYUPDATE"));
		};

		DictionaryBase.prototype.handleAddEvent = function (bp) {

			var key = bp.get("0");
			var value = bp.get("1");

			this.onAdd(key, value);
		};

		DictionaryBase.prototype.handleRemoveEvent = function (bp) {

			var key = bp.get("0");

			this.onRemove(key);
		};

		DictionaryBase.prototype.handleUpdateEvent = function (bp) {

			var key = bp.get("0");
			var value = bp.get("1");

			this.onUpdate(key, value);
		};

		var Dictionary = function Dictionary() {
			DictionaryBase.apply(this, arguments);
		};
		Dictionary.prototype = Object.create(DictionaryBase.prototype);
		Dictionary.prototype.constructor = Dictionary;

		if (typeof module !== 'undefined' && module.exports)
			module.exports.Dictionary = Dictionary;

		Dictionary.prototype.get = function (key, def /* optional */) {

			var self = this;

			return (new Promise(function (resolve, reject) {
				var bp = new BridgePacket(self.channel.conn);
				bp.set({ name: "key", type: "s", value: key });
				bp.send(self.channel, "BP_DICTIONARYGET").then(function (val) {
					resolve(val);
				}).catch(function (err) {
					if (def !== undefined)
						resolve(def, key);
					else
						reject(err);
				});
			}));
		};

		Dictionary.prototype.scan = function (key) {

			var self = this;

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "startKey", type: "s", value: key });
			return (new Promise(function (resolve, reject) {

				bp.send(self.channel, "BP_DICTIONARYSCAN").then(function (list) {
					if (list.length == 0)
						resolve([]);
					resolve(list.trim().split('\n'));
				}).catch(function (err) {
					reject(err);
				});
			}));
		};

		self.Dictionary = Dictionary;

		var DigitalInputBase = function DigitalInputBase() {
			Phidget.apply(this, arguments);
			this.name = "DigitalInput";
			this.class = 5;

			this.onStateChange = function (state) { };
			this.onError = function (code, desc) { };
		};
		DigitalInputBase.prototype = Object.create(Phidget.prototype);
		DigitalInputBase.prototype.constructor = DigitalInputBase;

		DigitalInputBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		DigitalInputBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		DigitalInputBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 0 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
				case 0x5a: // BP_STATECHANGE
					this.handleStateChangeEvent(bp);
					break;
			}
			return (true);
		};

		DigitalInputBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0x40: // BP_SETINPUTMODE
					this.data.inputMode = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('InputMode');
					return (true);
				case 0x4a: // BP_SETPOWERSUPPLY
					this.data.powerSupply = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('PowerSupply');
					return (true);
			}
		}

		DigitalInputBase.prototype.getInputMode = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.inputMode);
		};

		DigitalInputBase.prototype.setInputMode = function (inputMode) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: inputMode });
			var self = this;
			return (bp.send(this.channel, "BP_SETINPUTMODE").then(function (res) {
				self.data.inputMode = inputMode;
			}));
		};

		DigitalInputBase.prototype.getPowerSupply = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.powerSupply);
		};

		DigitalInputBase.prototype.setPowerSupply = function (powerSupply) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: powerSupply });
			var self = this;
			return (bp.send(this.channel, "BP_SETPOWERSUPPLY").then(function (res) {
				self.data.powerSupply = powerSupply;
			}));
		};

		DigitalInputBase.prototype.getState = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (!!this.data.state);
		};

		DigitalInputBase.prototype.handleStateChangeEvent = function (bp) {

			this.data.state = !!bp.get("0");

			this.onStateChange(this.data.state);
		};

		var DigitalInput = function DigitalInput() {
			DigitalInputBase.apply(this, arguments);
		};
		DigitalInput.prototype = Object.create(DigitalInputBase.prototype);
		DigitalInput.prototype.constructor = DigitalInput;
		self.DigitalInput = DigitalInput;

		var DigitalOutputBase = function DigitalOutputBase() {
			Phidget.apply(this, arguments);
			this.name = "DigitalOutput";
			this.class = 6;

			this.onError = function (code, desc) { };
		};
		DigitalOutputBase.prototype = Object.create(Phidget.prototype);
		DigitalOutputBase.prototype.constructor = DigitalOutputBase;

		DigitalOutputBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		DigitalOutputBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		DigitalOutputBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 0 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
			}
			return (true);
		};

		DigitalOutputBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0x37: // BP_SETDUTYCYCLE
					this.data.dutyCycle = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('DutyCycle');
					return (true);
				case 0x43: // BP_SETLEDCURRENTLIMIT
					this.data.LEDCurrentLimit = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('LEDCurrentLimit');
					return (true);
				case 0x44: // BP_SETLEDFORWARDVOLTAGE
					this.data.LEDForwardVoltage = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('LEDForwardVoltage');
					return (true);
				case 0x52: // BP_SETSTATE
					this.data.state = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('State');
					return (true);
			}
		}

		DigitalOutputBase.prototype.getDutyCycle = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.dutyCycle);
		};

		DigitalOutputBase.prototype.setDutyCycle = function (dutyCycle) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: dutyCycle });
			var self = this;
			return (bp.send(this.channel, "BP_SETDUTYCYCLE").then(function (res) {
				self.data.dutyCycle = dutyCycle;
			}));
		};

		DigitalOutputBase.prototype.getMinDutyCycle = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minDutyCycle);
		};

		DigitalOutputBase.prototype.getMaxDutyCycle = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxDutyCycle);
		};

		DigitalOutputBase.prototype.getLEDCurrentLimit = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.LEDCurrentLimit);
		};

		DigitalOutputBase.prototype.setLEDCurrentLimit = function (LEDCurrentLimit) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: LEDCurrentLimit });
			var self = this;
			return (bp.send(this.channel, "BP_SETLEDCURRENTLIMIT").then(function (res) {
				self.data.LEDCurrentLimit = LEDCurrentLimit;
			}));
		};

		DigitalOutputBase.prototype.getMinLEDCurrentLimit = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minLEDCurrentLimit);
		};

		DigitalOutputBase.prototype.getMaxLEDCurrentLimit = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxLEDCurrentLimit);
		};

		DigitalOutputBase.prototype.getLEDForwardVoltage = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.LEDForwardVoltage);
		};

		DigitalOutputBase.prototype.setLEDForwardVoltage = function (LEDForwardVoltage) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: LEDForwardVoltage });
			var self = this;
			return (bp.send(this.channel, "BP_SETLEDFORWARDVOLTAGE").then(function (res) {
				self.data.LEDForwardVoltage = LEDForwardVoltage;
			}));
		};

		DigitalOutputBase.prototype.getState = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (!!this.data.state);
		};

		DigitalOutputBase.prototype.setState = function (state) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: state });
			var self = this;
			return (bp.send(this.channel, "BP_SETSTATE").then(function (res) {
				self.data.state = state;
			}));
		};

		var DigitalOutput = function DigitalOutput() {
			DigitalOutputBase.apply(this, arguments);
		};
		DigitalOutput.prototype = Object.create(DigitalOutputBase.prototype);
		DigitalOutput.prototype.constructor = DigitalOutput;
		self.DigitalOutput = DigitalOutput;

		var DistanceSensorBase = function DistanceSensorBase() {
			Phidget.apply(this, arguments);
			this.name = "DistanceSensor";
			this.class = 7;

			this.onDistanceChange = function (distance) { };
			this.onSonarReflectionsUpdate = function (distances, amplitudes, count) { };
			this.onError = function (code, desc) { };
		};
		DistanceSensorBase.prototype = Object.create(Phidget.prototype);
		DistanceSensorBase.prototype.constructor = DistanceSensorBase;

		DistanceSensorBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		DistanceSensorBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		DistanceSensorBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 1 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
				case 0xc: // BP_DISTANCECHANGE
					this.handleDistanceChangeEvent(bp);
					break;
				case 0x58: // BP_SONARUPDATE
					this.handleSonarReflectionsUpdateEvent(bp);
					break;
			}
			return (true);
		};

		DistanceSensorBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0x36: // BP_SETDATAINTERVAL
					this.data.dataInterval = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('DataInterval');
					return (true);
				case 0x2e: // BP_SETCHANGETRIGGER
					this.data.distanceChangeTrigger = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('DistanceChangeTrigger');
					return (true);
				case 0x4b: // BP_SETSONARQUIETMODE
					this.data.sonarQuietMode = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('SonarQuietMode');
					return (true);
			}
		}

		DistanceSensorBase.prototype.getDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.dataInterval);
		};

		DistanceSensorBase.prototype.setDataInterval = function (dataInterval) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "u", value: dataInterval });
			var self = this;
			return (bp.send(this.channel, "BP_SETDATAINTERVAL").then(function (res) {
				self.data.dataInterval = dataInterval;
			}));
		};

		DistanceSensorBase.prototype.getMinDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minDataInterval);
		};

		DistanceSensorBase.prototype.getMaxDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxDataInterval);
		};

		DistanceSensorBase.prototype.getDistance = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.distance);
		};

		DistanceSensorBase.prototype.getMinDistance = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minDistance);
		};

		DistanceSensorBase.prototype.getMaxDistance = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxDistance);
		};

		DistanceSensorBase.prototype.getDistanceChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.distanceChangeTrigger);
		};

		DistanceSensorBase.prototype.setDistanceChangeTrigger = function (distanceChangeTrigger) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "u", value: distanceChangeTrigger });
			var self = this;
			return (bp.send(this.channel, "BP_SETCHANGETRIGGER").then(function (res) {
				self.data.distanceChangeTrigger = distanceChangeTrigger;
			}));
		};

		DistanceSensorBase.prototype.getMinDistanceChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minDistanceChangeTrigger);
		};

		DistanceSensorBase.prototype.getMaxDistanceChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxDistanceChangeTrigger);
		};

		DistanceSensorBase.prototype.getSonarQuietMode = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (!!this.data.sonarQuietMode);
		};

		DistanceSensorBase.prototype.setSonarQuietMode = function (sonarQuietMode) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: sonarQuietMode });
			var self = this;
			return (bp.send(this.channel, "BP_SETSONARQUIETMODE").then(function (res) {
				self.data.sonarQuietMode = sonarQuietMode;
			}));
		};

		DistanceSensorBase.prototype.handleDistanceChangeEvent = function (bp) {

			this.data.distance = bp.get("0");

			this.onDistanceChange(this.data.distance);
		};

		DistanceSensorBase.prototype.handleSonarReflectionsUpdateEvent = function (bp) {

			var distances = bp.get("0");
			var amplitudes = bp.get("1");
			var count = bp.get("2");

			this.onSonarReflectionsUpdate(distances, amplitudes, count);
		};

		var DistanceSensor = function DistanceSensor() {
			DistanceSensorBase.apply(this, arguments);
		};
		DistanceSensor.prototype = Object.create(DistanceSensorBase.prototype);
		DistanceSensor.prototype.constructor = DistanceSensor;
		self.DistanceSensor = DistanceSensor;


		DistanceSensor.prototype.getSonarReflections = function () {
		};

		var EncoderBase = function EncoderBase() {
			Phidget.apply(this, arguments);
			this.name = "Encoder";
			this.class = 8;

			this.onPositionChange = function (positionChange, timeChange, indexTriggered) { };
			this.onError = function (code, desc) { };
		};
		EncoderBase.prototype = Object.create(Phidget.prototype);
		EncoderBase.prototype.constructor = EncoderBase;

		EncoderBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		EncoderBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		EncoderBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 1 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
				case 0x1d: // BP_POSITIONCHANGE
					this.handlePositionChangeEvent(bp);
					break;
			}
			return (true);
		};

		EncoderBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0x38: // BP_SETENABLED
					this.data.enabled = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('Enabled');
					return (true);
				case 0x36: // BP_SETDATAINTERVAL
					this.data.dataInterval = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('DataInterval');
					return (true);
				case 0x41: // BP_SETIOMODE
					this.data.IOMode = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('IOMode');
					return (true);
				case 0x2e: // BP_SETCHANGETRIGGER
					this.data.positionChangeTrigger = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('PositionChangeTrigger');
					return (true);
			}
		}

		EncoderBase.prototype.setEnabled = function (enabled) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: enabled });
			var self = this;
			return (bp.send(this.channel, "BP_SETENABLED").then(function (res) {
				self.data.enabled = enabled;
			}));
		};

		EncoderBase.prototype.getEnabled = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (!!this.data.enabled);
		};

		EncoderBase.prototype.getDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.dataInterval);
		};

		EncoderBase.prototype.setDataInterval = function (dataInterval) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "u", value: dataInterval });
			var self = this;
			return (bp.send(this.channel, "BP_SETDATAINTERVAL").then(function (res) {
				self.data.dataInterval = dataInterval;
			}));
		};

		EncoderBase.prototype.getMinDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minDataInterval);
		};

		EncoderBase.prototype.getMaxDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxDataInterval);
		};

		EncoderBase.prototype.getIndexPosition = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.indexPosition);
		};

		EncoderBase.prototype.getIOMode = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.IOMode);
		};

		EncoderBase.prototype.setIOMode = function (IOMode) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: IOMode });
			var self = this;
			return (bp.send(this.channel, "BP_SETIOMODE").then(function (res) {
				self.data.IOMode = IOMode;
			}));
		};

		EncoderBase.prototype.getPosition = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.position);
		};

		EncoderBase.prototype.getPositionChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.positionChangeTrigger);
		};

		EncoderBase.prototype.setPositionChangeTrigger = function (positionChangeTrigger) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "u", value: positionChangeTrigger });
			var self = this;
			return (bp.send(this.channel, "BP_SETCHANGETRIGGER").then(function (res) {
				self.data.positionChangeTrigger = positionChangeTrigger;
			}));
		};

		EncoderBase.prototype.getMinPositionChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minPositionChangeTrigger);
		};

		EncoderBase.prototype.getMaxPositionChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxPositionChangeTrigger);
		};

		EncoderBase.prototype.handlePositionChangeEvent = function (bp) {

			var positionChange = bp.get("0");
			var timeChange = bp.get("1");
			var indexTriggered = !!bp.get("2");

			this.onPositionChange(positionChange, timeChange, indexTriggered);
		};

		var Encoder = function Encoder() {
			EncoderBase.apply(this, arguments);
		};
		Encoder.prototype = Object.create(EncoderBase.prototype);
		Encoder.prototype.constructor = Encoder;

		EncoderBase.prototype.handlePositionChangeEvent = function (bp) {

			var positionChange = bp.get("0");
			var timeChange = bp.get("1");
			var indexTriggered = bp.get("2");
			var indexPosition = 0;

			if (indexTriggered) {
				indexPosition = bp.get("3");
				this.data.indexPosition = this.data.position + indexPosition;
			}
			this.data.position += positionChange;
			this.onPositionChange(positionChange, timeChange, indexTriggered)
		}

		Encoder.prototype.setPosition = function (position) {

			if (this.data.indexPosition != 1e300)
				this.data.indexPosition += (position - this.data.position);
			this.data.position = position;
		}

		self.Encoder = Encoder;
		var FirmwareUpgradeBase = function FirmwareUpgradeBase() {
			Phidget.apply(this, arguments);
			this.name = "FirmwareUpgrade";
			this.class = 32;

			this.onProgressChange = function (progress) { };
			this.onError = function (code, desc) { };
		};
		FirmwareUpgradeBase.prototype = Object.create(Phidget.prototype);
		FirmwareUpgradeBase.prototype.constructor = FirmwareUpgradeBase;

		FirmwareUpgradeBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		FirmwareUpgradeBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		FirmwareUpgradeBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 1 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
				case 0x71: // BP_PROGRESSCHANGE
					this.handleProgressChangeEvent(bp);
					break;
			}
			return (true);
		};

		FirmwareUpgradeBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
			}
		}

		FirmwareUpgradeBase.prototype.getActualDeviceID = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.actualDeviceID);
		};

		FirmwareUpgradeBase.prototype.getActualDeviceName = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.actualDeviceName);
		};

		FirmwareUpgradeBase.prototype.getActualDeviceSKU = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.actualDeviceSKU);
		};

		FirmwareUpgradeBase.prototype.getActualDeviceVersion = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.actualDeviceVersion);
		};

		FirmwareUpgradeBase.prototype.getActualDeviceVINTID = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.actualDeviceVINTID);
		};

		FirmwareUpgradeBase.prototype.getProgress = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.progress);
		};

		FirmwareUpgradeBase.prototype.sendFirmware = function (data) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "c", value: data });
			bp.set({ name: "1", type: "d", value: dataLen });
			return (bp.send(this.channel, "BP_SENDFIRMWARE"));
		};

		FirmwareUpgradeBase.prototype.handleProgressChangeEvent = function (bp) {

			this.data.progress = bp.get("0");

			this.onProgressChange(this.data.progress);
		};

		var FirmwareUpgrade = function FirmwareUpgrade() {
			FirmwareUpgradeBase.apply(this, arguments);
		};
		FirmwareUpgrade.prototype = Object.create(FirmwareUpgradeBase.prototype);
		FirmwareUpgrade.prototype.constructor = FirmwareUpgrade;
		self.FirmwareUpgrade = FirmwareUpgrade;


		var FrequencyCounterBase = function FrequencyCounterBase() {
			Phidget.apply(this, arguments);
			this.name = "FrequencyCounter";
			this.class = 9;

			this.onFrequencyChange = function (frequency) { };
			this.onCountChange = function (counts, timeChange) { };
			this.onError = function (code, desc) { };
		};
		FrequencyCounterBase.prototype = Object.create(Phidget.prototype);
		FrequencyCounterBase.prototype.constructor = FrequencyCounterBase;

		FrequencyCounterBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		FrequencyCounterBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		FrequencyCounterBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 2 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
				case 0x7: // BP_COUNTCHANGE
					this.handleCountChangeEvent(bp);
					break;
				case 0x14: // BP_FREQUENCYCHANGE
					this.handleFrequencyChangeEvent(bp);
					break;
			}
			return (true);
		};

		FrequencyCounterBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0x38: // BP_SETENABLED
					this.data.enabled = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('Enabled');
					return (true);
				case 0x36: // BP_SETDATAINTERVAL
					this.data.dataInterval = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('DataInterval');
					return (true);
				case 0x3b: // BP_SETFILTERTYPE
					this.data.filterType = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('FilterType');
					return (true);
				case 0x40: // BP_SETINPUTMODE
					this.data.inputMode = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('InputMode');
					return (true);
				case 0x4a: // BP_SETPOWERSUPPLY
					this.data.powerSupply = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('PowerSupply');
					return (true);
			}
		}

		FrequencyCounterBase.prototype.getCount = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.count);
		};

		FrequencyCounterBase.prototype.getEnabled = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (!!this.data.enabled);
		};

		FrequencyCounterBase.prototype.setEnabled = function (enabled) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: enabled });
			var self = this;
			return (bp.send(this.channel, "BP_SETENABLED").then(function (res) {
				self.data.enabled = enabled;
			}));
		};

		FrequencyCounterBase.prototype.getDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.dataInterval);
		};

		FrequencyCounterBase.prototype.setDataInterval = function (dataInterval) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "u", value: dataInterval });
			var self = this;
			return (bp.send(this.channel, "BP_SETDATAINTERVAL").then(function (res) {
				self.data.dataInterval = dataInterval;
			}));
		};

		FrequencyCounterBase.prototype.getMinDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minDataInterval);
		};

		FrequencyCounterBase.prototype.getMaxDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxDataInterval);
		};

		FrequencyCounterBase.prototype.getFilterType = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.filterType);
		};

		FrequencyCounterBase.prototype.setFilterType = function (filterType) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: filterType });
			var self = this;
			return (bp.send(this.channel, "BP_SETFILTERTYPE").then(function (res) {
				self.data.filterType = filterType;
			}));
		};

		FrequencyCounterBase.prototype.getFrequency = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.frequency);
		};

		FrequencyCounterBase.prototype.getMaxFrequency = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxFrequency);
		};

		FrequencyCounterBase.prototype.getFrequencyCutoff = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.frequencyCutoff);
		};

		FrequencyCounterBase.prototype.getMinFrequencyCutoff = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minFrequencyCutoff);
		};

		FrequencyCounterBase.prototype.getMaxFrequencyCutoff = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxFrequencyCutoff);
		};

		FrequencyCounterBase.prototype.getInputMode = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.inputMode);
		};

		FrequencyCounterBase.prototype.setInputMode = function (inputMode) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: inputMode });
			var self = this;
			return (bp.send(this.channel, "BP_SETINPUTMODE").then(function (res) {
				self.data.inputMode = inputMode;
			}));
		};

		FrequencyCounterBase.prototype.getPowerSupply = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.powerSupply);
		};

		FrequencyCounterBase.prototype.setPowerSupply = function (powerSupply) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: powerSupply });
			var self = this;
			return (bp.send(this.channel, "BP_SETPOWERSUPPLY").then(function (res) {
				self.data.powerSupply = powerSupply;
			}));
		};

		FrequencyCounterBase.prototype.getTimeElapsed = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.timeElapsed);
		};

		FrequencyCounterBase.prototype.handleCountChangeEvent = function (bp) {

			var counts = bp.get("0");
			var timeChange = bp.get("1");

			this.onCountChange(counts, timeChange);
		};

		FrequencyCounterBase.prototype.handleFrequencyChangeEvent = function (bp) {

			this.data.frequency = bp.get("0");

			this.onFrequencyChange(this.data.frequency);
		};

		var FrequencyCounter = function FrequencyCounter() {
			FrequencyCounterBase.apply(this, arguments);
		};
		FrequencyCounter.prototype = Object.create(FrequencyCounterBase.prototype);
		FrequencyCounter.prototype.constructor = FrequencyCounter;

		FrequencyCounter.prototype.setFrequencyCutoff = function (frequencyCutoff) {

			// ** Generated: Requires Review **
			this.data.frequencyCutoff = frequencyCutoff;
		};

		FrequencyCounter.prototype.handleUnsupportedBridgePacket = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case PhidgetBase.prototype.BP_FREQUENCYDATA:
					var ticks = bp.get("0");
					var counts = bp.get("1");
					var ticksAtLastCount = bp.get("2");
					var countTimeSpan;
					var cutoffTime;
					var precision;
					var d;

					this.data.timeElapsed += ticks;
					this.data.count += counts;

					if (counts == 0) {
						// do not accumulate if timed out
						if (!this.data.hasOwnProperty('totalTicksSinceLastCount'))
							this.data.totalTicksSinceLastCount = 0;

						if (Number.isNaN(this.data.totalTicksSinceLastCount))
							return (true);

						this.data.totalTicksSinceLastCount += ticks;
						//only accumulate counts up to cutoff
						cutoffTime = Math.round(1000 / this.data.frequencyCutoff);

						if (this.data.totalTicksSinceLastCount > cutoffTime) {
							this.data.frequency = 0;

							//Fire one event with 0 counts to indicate that the Timeout has elapsed and frequency is now 0
							this.onCountChange(0, this.data.totalTicksSinceLastCount);
							this.onFrequencyChange(this.data.frequency);

							this.data.totalTicksSinceLastCount = Number.NaN;
						}

						return (true);
					}

					// 1st count(s) since a timeout (or 1st read packet since opening)
					// don't try to calculate frequency because we don't know the 'ticks at first count'
					if (Number.isNaN(this.data.totalTicksSinceLastCount)) {
						this.data.totalTicksSinceLastCount = ticks - ticksAtLastCount;
						return (true);
					}

					countTimeSpan = this.data.totalTicksSinceLastCount + ticksAtLastCount; //in ms
					this.data.totalTicksSinceLastCount = ticks - ticksAtLastCount;

					d = this.data.frequencyCutoff;
					precision = 2;
					while (d < 1) {
						precision++;
						d *= 10;
					}

					this.data.frequency = Number((counts / (countTimeSpan / 1000.0)).toFixed(precision));

					this.onCountChange(counts, countTimeSpan);
					this.onFrequencyChange(this.data.frequency);
					return (true);
			}
		}

		FrequencyCounter.prototype.setFrequencyCutoff = function (frequencyCutoff) {

			this.data.frequencyCutoff = frequencyCutoff;
		};

		FrequencyCounter.prototype.resetCount = function () {
			this.data.count = 0;
			this.data.timeElapsed = 0;
			this.data.frequency = 1e300;
		};

		self.FrequencyCounter = FrequencyCounter;

		var GenericBase = function GenericBase() {
			Phidget.apply(this, arguments);
			this.name = "Generic";
			this.class = 33;

			this.onPacket = function (packet, packetlen) { };
			this.onError = function (code, desc) { };
		};
		GenericBase.prototype = Object.create(Phidget.prototype);
		GenericBase.prototype.constructor = GenericBase;

		GenericBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		GenericBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		GenericBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 0 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
				case 0x1c: // BP_PACKET
					this.handlePacketEvent(bp);
					break;
			}
			return (true);
		};

		GenericBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
			}
		}

		GenericBase.prototype.getINPacketLength = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.INPacketLength);
		};

		GenericBase.prototype.getOUTPacketLength = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.OUTPacketLength);
		};

		GenericBase.prototype.sendPacket = function (packet) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "c", value: packet });
			bp.set({ name: "1", type: "d", value: packetLen });
			return (bp.send(this.channel, "BP_SENDPACKET"));
		};

		GenericBase.prototype.handlePacketEvent = function (bp) {

			var packet = bp.get("0");
			var packetlen = bp.get("1");

			this.onPacket(packet, packetlen);
		};

		var Generic = function Generic() {
			GenericBase.apply(this, arguments);
		};
		Generic.prototype = Object.create(GenericBase.prototype);
		Generic.prototype.constructor = Generic;
		self.Generic = Generic;


		var GPSBase = function GPSBase() {
			Phidget.apply(this, arguments);
			this.name = "GPS";
			this.class = 10;

			this.onPositionChange = function (latitude, longitude, altitude) { };
			this.onHeadingChange = function (heading, velocity) { };
			this.onPositionFixStateChange = function (positionFixState) { };
			this.onError = function (code, desc) { };
		};
		GPSBase.prototype = Object.create(Phidget.prototype);
		GPSBase.prototype.constructor = GPSBase;

		GPSBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		GPSBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		GPSBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 0 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
				case 0x6e: // BP_HEADINGCHANGE
					this.handleHeadingChangeEvent(bp);
					break;
				case 0x1d: // BP_POSITIONCHANGE
					this.handlePositionChangeEvent(bp);
					break;
				case 0x1e: // BP_POSITIONFIXSTATUSCHANGE
					this.handlePositionFixStateChangeEvent(bp);
					break;
			}
			return (true);
		};

		GPSBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
			}
		}

		GPSBase.prototype.getAltitude = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.altitude);
		};

		GPSBase.prototype.getHeading = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.heading);
		};

		GPSBase.prototype.getLatitude = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.latitude);
		};

		GPSBase.prototype.getLongitude = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.longitude);
		};

		GPSBase.prototype.getPositionFixState = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (!!this.data.positionFixState);
		};

		GPSBase.prototype.getVelocity = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.velocity);
		};

		GPSBase.prototype.handleHeadingChangeEvent = function (bp) {

			this.data.heading = bp.get("0");
			this.data.velocity = bp.get("1");

			this.onHeadingChange(this.data.heading, this.data.velocity);
		};

		GPSBase.prototype.handlePositionChangeEvent = function (bp) {

			this.data.latitude = bp.get("0");
			this.data.longitude = bp.get("1");
			this.data.altitude = bp.get("2");

			this.onPositionChange(this.data.latitude, this.data.longitude, this.data.altitude);
		};

		GPSBase.prototype.handlePositionFixStateChangeEvent = function (bp) {

			this.data.positionFixState = !!bp.get("0");

			this.onPositionFixStateChange(this.data.positionFixState);
		};

		var GPS = function GPS() {
			GPSBase.apply(this, arguments);
		};
		GPS.prototype = Object.create(GPSBase.prototype);
		GPS.prototype.constructor = GPS;

		GPS.prototype.handleUnsupportedBridgePacket = function handleUnsupportedBridgePacket(bp) {

			switch (bp.vpkt) {
				case PhidgetBase.prototype.BP_DATA:
					// you can modify this section to pull less commonly used data out of the packet
					this.data["GPGGA.altitude"] = bp.entries["GPGGA.altitude"].v;
					this.data["GPGGA.latitude"] = bp.entries["GPGGA.latitude"].v;
					this.data["GPGGA.longitude"] = bp.entries["GPGGA.longitude"].v;
					this.data["GPVTG.speed"] = bp.entries["GPVTG.speed"].v;
					this.data["GPVTG.trueHeading"] = bp.entries["GPVTG.trueHeading"].v;

					this.data.altitude = bp.entries["GPGGA.altitude"].v;
					this.data.latitude = bp.entries["GPGGA.latitude"].v;
					this.data.longitude = bp.entries["GPGGA.longitude"].v;
					this.data.velocity = bp.entries["GPVTG.speed"].v;
					this.data.heading = bp.entries["GPVTG.trueHeading"].v;
					break;

				case PhidgetBase.prototype.BP_TIME:
					var localHour = this.convertToLocal(bp.entries["GPSTime.tm_hour"].v);
					this.data["GPSTime.tm_ms"] = bp.entries["GPSTime.tm_ms"].v;
					this.data["GPSTime.tm_sec"] = bp.entries["GPSTime.tm_sec"].v;
					this.data["GPSTime.tm_min"] = bp.entries["GPSTime.tm_min"].v;
					this.data["GPSTime.tm_hour"] = localHour;
					if (typeof this.onTimeChange == 'function')
						this.onTimeChange(localHour, this.data["GPSTime.tm_min"], this.data["GPSTime.tm_sec"], this.data["GPSTime.tm_ms"]);
					break;

				case PhidgetBase.prototype.BP_DATE:
					this.data["GPSDate.tm_mday"] = bp.entries["GPSDate.tm_mday"].v;
					this.data["GPSDate.tm_mon"] = bp.entries["GPSDate.tm_mon"].v;
					this.data["GPSDate.tm_year"] = bp.entries["GPSDate.tm_year"].v;
					if (typeof this.onDateChange == 'function')
						this.onDateChange(this.data["GPSDate.tm_year"], this.data["GPSDate.tm_mon"], this.data["GPSDate.tm_mday"]);
					break;

				default:
					return (false);
			}
			return (true);
		};

		GPS.prototype.convertToLocal = function convertToLocal(hour) {

			var d = new Date();
			var offset = d.getTimezoneOffset() / 60;
			return (hour - offset);
		};

		self.GPS = GPS;
		var GyroscopeBase = function GyroscopeBase() {
			Phidget.apply(this, arguments);
			this.name = "Gyroscope";
			this.class = 12;

			this.onAngularRateUpdate = function (angularRate, timestamp) { };
			this.onError = function (code, desc) { };
		};
		GyroscopeBase.prototype = Object.create(Phidget.prototype);
		GyroscopeBase.prototype.constructor = GyroscopeBase;

		GyroscopeBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		GyroscopeBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		GyroscopeBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 1 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
				case 0x2: // BP_ANGULARRATEUPDATE
					this.handleAngularRateUpdateEvent(bp);
					break;
			}
			return (true);
		};

		GyroscopeBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0x36: // BP_SETDATAINTERVAL
					this.data.dataInterval = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('DataInterval');
					return (true);
			}
		}

		GyroscopeBase.prototype.getAngularRate = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.angularRate);
		};

		GyroscopeBase.prototype.getMinAngularRate = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minAngularRate);
		};

		GyroscopeBase.prototype.getMaxAngularRate = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxAngularRate);
		};

		GyroscopeBase.prototype.getAxisCount = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.axisCount);
		};

		GyroscopeBase.prototype.getDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.dataInterval);
		};

		GyroscopeBase.prototype.setDataInterval = function (dataInterval) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "u", value: dataInterval });
			var self = this;
			return (bp.send(this.channel, "BP_SETDATAINTERVAL").then(function (res) {
				self.data.dataInterval = dataInterval;
			}));
		};

		GyroscopeBase.prototype.getMinDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minDataInterval);
		};

		GyroscopeBase.prototype.getMaxDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxDataInterval);
		};

		GyroscopeBase.prototype.getTimestamp = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.timestamp);
		};

		GyroscopeBase.prototype.zero = function () {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			return (bp.send(this.channel, "BP_ZERO"));
		};

		GyroscopeBase.prototype.handleAngularRateUpdateEvent = function (bp) {

			this.data.angularRate = bp.get("0");
			this.data.timestamp = bp.get("1");

			this.onAngularRateUpdate(this.data.angularRate, this.data.timestamp);
		};

		var Gyroscope = function Gyroscope() {
			GyroscopeBase.apply(this, arguments);
		};
		Gyroscope.prototype = Object.create(GyroscopeBase.prototype);
		Gyroscope.prototype.constructor = Gyroscope;
		self.Gyroscope = Gyroscope;

		var HubBase = function HubBase() {
			Phidget.apply(this, arguments);
			this.name = "Hub";
			this.class = 13;

			this.onError = function (code, desc) { };
		};
		HubBase.prototype = Object.create(Phidget.prototype);
		HubBase.prototype.constructor = HubBase;

		HubBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		HubBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		HubBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 0 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
			}
			return (true);
		};

		HubBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
			}
		}

		HubBase.prototype.setADCCalibrationValues = function (voltageInputGain, voltageRatioGain) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: voltageInputGain });
			bp.set({ name: "1", type: "g", value: voltageRatioGain });
			return (bp.send(this.channel, "BP_SETCALIBRATIONVALUES"));
		};

		HubBase.prototype.setFirmwareUpgradeFlag = function (port, timeout) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: port });
			bp.set({ name: "1", type: "u", value: timeout });
			return (bp.send(this.channel, "BP_SETFIRMWAREUPGRADEFLAG"));
		};

		HubBase.prototype.setPortMode = function (port, mode) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: port });
			bp.set({ name: "1", type: "d", value: mode });
			return (bp.send(this.channel, "BP_SETPORTMODE"));
		};

		HubBase.prototype.setPortPower = function (port, state) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: port });
			bp.set({ name: "1", type: "d", value: state });
			return (bp.send(this.channel, "BP_SETPORTPOWER"));
		};

		var Hub = function Hub() {
			HubBase.apply(this, arguments);
		};
		Hub.prototype = Object.create(HubBase.prototype);
		Hub.prototype.constructor = Hub;
		self.Hub = Hub;


		var HumiditySensorBase = function HumiditySensorBase() {
			Phidget.apply(this, arguments);
			this.name = "HumiditySensor";
			this.class = 15;

			this.onHumidityChange = function (humidity) { };
			this.onError = function (code, desc) { };
		};
		HumiditySensorBase.prototype = Object.create(Phidget.prototype);
		HumiditySensorBase.prototype.constructor = HumiditySensorBase;

		HumiditySensorBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		HumiditySensorBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		HumiditySensorBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 0 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
				case 0x16: // BP_HUMIDITYCHANGE
					this.handleHumidityChangeEvent(bp);
					break;
			}
			return (true);
		};

		HumiditySensorBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0x36: // BP_SETDATAINTERVAL
					this.data.dataInterval = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('DataInterval');
					return (true);
				case 0x2e: // BP_SETCHANGETRIGGER
					this.data.humidityChangeTrigger = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('HumidityChangeTrigger');
					return (true);
			}
		}

		HumiditySensorBase.prototype.getDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.dataInterval);
		};

		HumiditySensorBase.prototype.setDataInterval = function (dataInterval) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "u", value: dataInterval });
			var self = this;
			return (bp.send(this.channel, "BP_SETDATAINTERVAL").then(function (res) {
				self.data.dataInterval = dataInterval;
			}));
		};

		HumiditySensorBase.prototype.getMinDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minDataInterval);
		};

		HumiditySensorBase.prototype.getMaxDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxDataInterval);
		};

		HumiditySensorBase.prototype.getHumidity = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.humidity);
		};

		HumiditySensorBase.prototype.getMinHumidity = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minHumidity);
		};

		HumiditySensorBase.prototype.getMaxHumidity = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxHumidity);
		};

		HumiditySensorBase.prototype.getHumidityChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.humidityChangeTrigger);
		};

		HumiditySensorBase.prototype.setHumidityChangeTrigger = function (humidityChangeTrigger) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: humidityChangeTrigger });
			var self = this;
			return (bp.send(this.channel, "BP_SETCHANGETRIGGER").then(function (res) {
				self.data.humidityChangeTrigger = humidityChangeTrigger;
			}));
		};

		HumiditySensorBase.prototype.getMinHumidityChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minHumidityChangeTrigger);
		};

		HumiditySensorBase.prototype.getMaxHumidityChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxHumidityChangeTrigger);
		};

		HumiditySensorBase.prototype.handleHumidityChangeEvent = function (bp) {

			this.data.humidity = bp.get("0");

			this.onHumidityChange(this.data.humidity);
		};

		var HumiditySensor = function HumiditySensor() {
			HumiditySensorBase.apply(this, arguments);
		};
		HumiditySensor.prototype = Object.create(HumiditySensorBase.prototype);
		HumiditySensor.prototype.constructor = HumiditySensor;
		self.HumiditySensor = HumiditySensor;

		var IRBase = function IRBase() {
			Phidget.apply(this, arguments);
			this.name = "IR";
			this.class = 16;

			this.onCode = function (code, bitCount, isRepeat) { };
			this.onLearn = function (code, codeInfo) { };
			this.onRawData = function (data, dataLength) { };
			this.onError = function (code, desc) { };
		};
		IRBase.prototype = Object.create(Phidget.prototype);
		IRBase.prototype.constructor = IRBase;

		IRBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		IRBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		IRBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 1 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
				case 0x5: // BP_CODE
					this.handleCodeEvent(bp);
					break;
				case 0x19: // BP_LEARN
					this.handleLearnEvent(bp);
					break;
				case 0x20: // BP_RAWDATA
					this.handleRawDataEvent(bp);
					break;
			}
			return (true);
		};

		IRBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
			}
		}

		IRBase.prototype.transmitRepeat = function () {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			return (bp.send(this.channel, "BP_TRANSMITREPEAT"));
		};

		IRBase.prototype.handleCodeEvent = function (bp) {

			var code = bp.get("0");
			var bitCount = bp.get("1");
			var isRepeat = !!bp.get("2");

			this.onCode(code, bitCount, isRepeat);
		};

		IRBase.prototype.handleLearnEvent = function (bp) {

			var code = bp.get("0");
			var codeInfo = {
				bitCount: bp.get("CodeInfo.bitCount"),
				encoding: bp.get("CodeInfo.encoding"),
				length: bp.get("CodeInfo.length"),
				gap: bp.get("CodeInfo.gap"),
				trail: bp.get("CodeInfo.trail"),
				header: bp.get("CodeInfo.header"),
				one: bp.get("CodeInfo.one"),
				zero: bp.get("CodeInfo.zero"),
				repeat: bp.get("CodeInfo.repeat"),
				minRepeat: bp.get("CodeInfo.minRepeat"),
				dutyCycle: bp.get("CodeInfo.dutyCycle"),
				carrierFrequency: bp.get("CodeInfo.carrierFrequency"),
				toggleMask: bp.get("CodeInfo.toggleMask"),
			};

			this.onLearn(code, codeInfo);
		};

		IRBase.prototype.handleRawDataEvent = function (bp) {

			var data = bp.get("0");
			var dataLength = bp.get("1");

			this.onRawData(data, dataLength);
		};

		var IR = function IR() {
			IRBase.apply(this, arguments);
		};
		IR.prototype = Object.create(IRBase.prototype);
		IR.prototype.constructor = IR;

		IR.prototype.transmit = function (code, codeInfo, callback) {

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: 'code', type: 's', value: code });
			bp.set({ name: 'CodeInfo.bitCount', type: 'u', value: codeInfo.bitCount });
			bp.set({ name: 'CodeInfo.encoding', type: 'd', value: codeInfo.encoding });
			bp.set({ name: 'CodeInfo.length', type: 'd', value: codeInfo.length });
			bp.set({ name: 'CodeInfo.gap', type: 'u', value: codeInfo.gap });
			bp.set({ name: 'CodeInfo.trail', type: 'u', value: codeInfo.trail });
			bp.set({ name: 'CodeInfo.header', type: 'U', value: codeInfo.header });
			bp.set({ name: 'CodeInfo.one', type: 'U', value: codeInfo.one });
			bp.set({ name: 'CodeInfo.zero', type: 'U', value: codeInfo.zero });
			bp.set({ name: 'CodeInfo.repeat', type: 'U', value: codeInfo.repeat });
			bp.set({ name: 'CodeInfo.minRepeat', type: 'u', value: codeInfo.minRepeat });
			bp.set({ name: 'CodeInfo.dutyCycle', type: 'g', value: codeInfo.dutyCycle });
			bp.set({ name: 'CodeInfo.carrierFrequency', type: 'u', value: codeInfo.carrierFrequency });
			bp.set({ name: 'CodeInfo.toggleMask', type: 'R', value: codeInfo.toggleMask });
			bp.send(this.channel, PhidgetBase.prototype.BP_TRANSMIT, callback);
		};

		IR.prototype.transmitRaw = function (data, carrierFrequency, dutyCycle, gap, callback) {

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: 'data', type: 'U', value: data });
			//bp.set({ name: 'count', type: 'u', value: data.length }); not needed in JS
			bp.set({ name: 'carrierFrequency', type: 'u', value: carrierFrequency });
			bp.set({ name: 'dutyCycle', type: 'g', value: dutyCycle });
			bp.set({ name: 'gap', type: 'u', value: gap });
			bp.send(this.channel, PhidgetBase.prototype.BP_TRANSMITRAW, callback);
		}

		IRBase.prototype.handleCodeEvent = function (bp) {

			var code = bp.get("0");
			var bitCount = bp.get("1");
			var isRepeat = bp.get("2");
			var lastCodeInfo = { bitCount: bitCount };

			this.data.lastCodeStr = code;
			this.data.lastCodeInfo = lastCodeInfo;
			this.data.lastCodeKnown = true;

			this.onCode(code, bitCount, isRepeat);
		};

		IRBase.prototype.handleLearnEvent = function (bp) {

			var code = bp.get("0");
			var codeInfo = {
				bitCount: bp.get("CodeInfo.bitCount"),
				encoding: bp.get("CodeInfo.encoding"),
				length: bp.get("CodeInfo.length"),
				gap: bp.get("CodeInfo.gap"),
				trail: bp.get("CodeInfo.trail"),
				header: bp.get("CodeInfo.header"),
				one: bp.get("CodeInfo.one"),
				zero: bp.get("CodeInfo.zero"),
				repeat: bp.get("CodeInfo.repeat"),
				minRepeat: bp.get("CodeInfo.minRepeat"),
				dutyCycle: bp.get("CodeInfo.dutyCycle"),
				carrierFrequency: bp.get("CodeInfo.carrierFrequency"),
				toggleMask: bp.get("CodeInfo.toggleMask"),
			};

			this.data.lastLearnedCodeStr = code;
			this.data.lastLearnedCodeInfo = codeInfo;
			this.data.lastLearnedCodeKnown = true;
			this.onLearn(code, codeInfo);
		};

		IR.prototype.getLastCode = function () {

			if (typeof this.data.lastCodeKnown == "undefined")
				throw (new Error("last code unknown"));
			else
				return ({ bitCount: this.data.lastCodeInfo.bitCount, code: this.data.lastCodeStr });
		};

		IR.prototype.getLastLearnedCode = function () {

			if (typeof this.data.lastLearnedCodeKnown == "undefined")
				throw (new Error("last learned code unknown"));
			else
				return ({ code: this.data.lastLearnedCodeStr, codeInfo: this.data.lastLearnedCodeInfo });
		};

		IR.prototype.handleUnsupportedBridgePacket = function (bp) {

			switch (bp.vpkt) {
				case PhidgetBase.prototype.BP_REPEAT:
					this.onCode(this.data.lastCodeStr, this.data.lastCodeStr.bitCount, true);
					break;
				default:
					return (false);
			}
			return (true);
		};

		self.IR = IR;
		var LCDBase = function LCDBase() {
			Phidget.apply(this, arguments);
			this.name = "LCD";
			this.class = 11;

			this.onError = function (code, desc) { };
		};
		LCDBase.prototype = Object.create(Phidget.prototype);
		LCDBase.prototype.constructor = LCDBase;

		LCDBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		LCDBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		LCDBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 2 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
			}
			return (true);
		};

		LCDBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0x2b: // BP_SETBACKLIGHT
					this.data.backlight = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('Backlight');
					return (true);
				case 0x30: // BP_SETCONTRAST
					this.data.contrast = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('Contrast');
					return (true);
				case 0x34: // BP_SETCURSORBLINK
					this.data.cursorBlink = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('CursorBlink');
					return (true);
				case 0x35: // BP_SETCURSORON
					this.data.cursorOn = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('CursorOn');
					return (true);
				case 0x3e: // BP_SETFRAMEBUFFER
					this.data.frameBuffer = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('FrameBuffer');
					return (true);
				case 0x4e: // BP_SETSCREENSIZE
					this.data.screenSize = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('ScreenSize');
					return (true);
				case 0x50: // BP_SETSLEEP
					this.data.sleeping = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('Sleeping');
					return (true);
			}
		}

		LCDBase.prototype.getBacklight = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.backlight);
		};

		LCDBase.prototype.setBacklight = function (backlight) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: backlight });
			var self = this;
			return (bp.send(this.channel, "BP_SETBACKLIGHT").then(function (res) {
				self.data.backlight = backlight;
			}));
		};

		LCDBase.prototype.getMinBacklight = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minBacklight);
		};

		LCDBase.prototype.getMaxBacklight = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxBacklight);
		};

		LCDBase.prototype.clear = function () {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			return (bp.send(this.channel, "BP_CLEAR"));
		};

		LCDBase.prototype.getContrast = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.contrast);
		};

		LCDBase.prototype.setContrast = function (contrast) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: contrast });
			var self = this;
			return (bp.send(this.channel, "BP_SETCONTRAST").then(function (res) {
				self.data.contrast = contrast;
			}));
		};

		LCDBase.prototype.getMinContrast = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minContrast);
		};

		LCDBase.prototype.getMaxContrast = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxContrast);
		};

		LCDBase.prototype.copy = function (srcFramebuffer, dstFramebuffer, srcX1, srcY1, srcX2, srcY2,
			dstX, dstY, inverted) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: srcFramebuffer });
			bp.set({ name: "1", type: "d", value: dstFramebuffer });
			bp.set({ name: "2", type: "d", value: srcX1 });
			bp.set({ name: "3", type: "d", value: srcY1 });
			bp.set({ name: "4", type: "d", value: srcX2 });
			bp.set({ name: "5", type: "d", value: srcY2 });
			bp.set({ name: "6", type: "d", value: dstX });
			bp.set({ name: "7", type: "d", value: dstY });
			bp.set({ name: "8", type: "d", value: inverted });
			return (bp.send(this.channel, "BP_COPY"));
		};

		LCDBase.prototype.getCursorBlink = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (!!this.data.cursorBlink);
		};

		LCDBase.prototype.setCursorBlink = function (cursorBlink) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: cursorBlink });
			var self = this;
			return (bp.send(this.channel, "BP_SETCURSORBLINK").then(function (res) {
				self.data.cursorBlink = cursorBlink;
			}));
		};

		LCDBase.prototype.getCursorOn = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (!!this.data.cursorOn);
		};

		LCDBase.prototype.setCursorOn = function (cursorOn) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: cursorOn });
			var self = this;
			return (bp.send(this.channel, "BP_SETCURSORON").then(function (res) {
				self.data.cursorOn = cursorOn;
			}));
		};

		LCDBase.prototype.drawLine = function (x1, y1, x2, y2) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: x1 });
			bp.set({ name: "1", type: "d", value: y1 });
			bp.set({ name: "2", type: "d", value: x2 });
			bp.set({ name: "3", type: "d", value: y2 });
			return (bp.send(this.channel, "BP_DRAWLINE"));
		};

		LCDBase.prototype.drawPixel = function (x, y, pixelState) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: x });
			bp.set({ name: "1", type: "d", value: y });
			bp.set({ name: "2", type: "d", value: pixelState });
			return (bp.send(this.channel, "BP_DRAWPIXEL"));
		};

		LCDBase.prototype.drawRect = function (x1, y1, x2, y2, filled, inverted) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: x1 });
			bp.set({ name: "1", type: "d", value: y1 });
			bp.set({ name: "2", type: "d", value: x2 });
			bp.set({ name: "3", type: "d", value: y2 });
			bp.set({ name: "4", type: "d", value: filled });
			bp.set({ name: "5", type: "d", value: inverted });
			return (bp.send(this.channel, "BP_DRAWRECT"));
		};

		LCDBase.prototype.flush = function () {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			return (bp.send(this.channel, "BP_FLUSH"));
		};

		LCDBase.prototype.setFontSize = function (font, width, height) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: font });
			bp.set({ name: "1", type: "d", value: width });
			bp.set({ name: "2", type: "d", value: height });
			return (bp.send(this.channel, "BP_SETFONTSIZE"));
		};

		LCDBase.prototype.getFrameBuffer = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.frameBuffer);
		};

		LCDBase.prototype.setFrameBuffer = function (frameBuffer) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: frameBuffer });
			var self = this;
			return (bp.send(this.channel, "BP_SETFRAMEBUFFER").then(function (res) {
				self.data.frameBuffer = frameBuffer;
			}));
		};

		LCDBase.prototype.getHeight = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.height);
		};

		LCDBase.prototype.initialize = function () {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			return (bp.send(this.channel, "BP_INITIALIZE"));
		};

		LCDBase.prototype.saveFrameBuffer = function (frameBuffer) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: frameBuffer });
			return (bp.send(this.channel, "BP_SAVEFRAMEBUFFER"));
		};

		LCDBase.prototype.getScreenSize = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.screenSize);
		};

		LCDBase.prototype.setScreenSize = function (screenSize) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: screenSize });
			var self = this;
			return (bp.send(this.channel, "BP_SETSCREENSIZE").then(function (res) {
				self.data.screenSize = screenSize;
			}));
		};

		LCDBase.prototype.getSleeping = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (!!this.data.sleeping);
		};

		LCDBase.prototype.setSleeping = function (sleeping) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: sleeping });
			var self = this;
			return (bp.send(this.channel, "BP_SETSLEEP").then(function (res) {
				self.data.sleeping = sleeping;
			}));
		};

		LCDBase.prototype.getWidth = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.width);
		};

		LCDBase.prototype.writeText = function (font, xpos, ypos, text) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: font });
			bp.set({ name: "1", type: "d", value: xpos });
			bp.set({ name: "2", type: "d", value: ypos });
			bp.set({ name: "3", type: "s", value: text });
			return (bp.send(this.channel, "BP_WRITETEXT"));
		};

		var LCD = function LCD() {
			LCDBase.apply(this, arguments);
		};
		LCD.prototype = Object.create(LCDBase.prototype);
		LCD.prototype.constructor = LCD;

		LCD.prototype.setCharacterBitmap = function (font, character, bitmap) {

			var fontSize = this.getFontSize(font);
			var bp = new BridgePacket(this.channel.conn);

			if (fontSize.width <= 0)
				throw (new Error("invalid arg (getFontSize): " + font));
			if (fontSize.height <= 0)
				throw (new Error("invalid arg (getFontSize): " + font));

			bp.set({ name: "font", type: "d", value: font });
			bp.set({ name: "character", type: "s", value: character });
			bp.set({ name: "bitmap", type: "R", value: bitmap });
			return (bp.send(this.channel, "BP_SETCHARACTERBITMAP", function () {
				if (typeof this.setCharacterBitmapSuccess === "function")
					this.setCharacterBitmapSuccess();
			}.bind(this)));
		};

		LCD.prototype.getMaxCharacters = function (font) {

			var maxChars;
			var fontSize;

			switch (this.getDeviceID()) {
				case DeviceID.PHIDID_LCD1100:
					if (parseInt(font) < 1 || parseInt(font) > 5)
						throw (new Error("invalid arg (getMaxCharacters): " + font));

					fontSize = this.getFontSize(font);

					if (fontSize.width <= 0)
						throw (new Error("invalid arg (getFontSize): " + font));

					if (fontSize.height <= 0)
						throw (new Error("invalid arg (getFontSize): " + font));

					maxChars = Math.min(255, (this.data.width / fontSize.width) * (this.data.height / fontSize.height));
					break;

				case DeviceID.PHIDID_1202_1203:
				case DeviceID.PHIDID_1204:
				case DeviceID.PHIDID_1215__1218:
				case DeviceID.PHIDID_1219__1222:
					maxChars = 0xff;
					break;

				default:
					throw (new Error("unexpected device: " + this.getDeviceID()));
			}

			return (maxChars);
		};

		LCD.prototype.getFontSize = function (font) {

			var fontSize = { width: 0, height: 0 };

			var v = window;

			if (isNode == false)
				var global = window;

			switch (parseInt(font)) {
				case global.jPhidgets.LCDFont.FONT_6x10:
					fontSize.width = 6;
					fontSize.height = 10;
					break;
				case global.jPhidgets.LCDFont.FONT_5x8:
					fontSize.width = 5;
					fontSize.height = 8;
					break;
				case global.jPhidgets.LCDFont.FONT_6x12:
					fontSize.width = 6;
					fontSize.height = 12;
					break;
				case global.jPhidgets.LCDFont.FONT_User1:
				case global.jPhidgets.LCDFont.FONT_User2:
					fontSize.width = this.data.fontWidth[parseInt(font)];
					fontSize.height = this.data.fontHeight[parseInt(font)];
					break;
				default:
					throw (new Error("invalid arg (getFontSize): " + font));
			}

			return (fontSize);
		};

		LCD.prototype.writeBitmap = function (xpos, ypos, xsize, ysize, bitmap) {
		};

		self.LCD = LCD;

		var LightSensorBase = function LightSensorBase() {
			Phidget.apply(this, arguments);
			this.name = "LightSensor";
			this.class = 17;

			this.onIlluminanceChange = function (illuminance) { };
			this.onError = function (code, desc) { };
		};
		LightSensorBase.prototype = Object.create(Phidget.prototype);
		LightSensorBase.prototype.constructor = LightSensorBase;

		LightSensorBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		LightSensorBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		LightSensorBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 0 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
				case 0x17: // BP_ILLUMINANCECHANGE
					this.handleIlluminanceChangeEvent(bp);
					break;
			}
			return (true);
		};

		LightSensorBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0x36: // BP_SETDATAINTERVAL
					this.data.dataInterval = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('DataInterval');
					return (true);
				case 0x2e: // BP_SETCHANGETRIGGER
					this.data.illuminanceChangeTrigger = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('IlluminanceChangeTrigger');
					return (true);
			}
		}

		LightSensorBase.prototype.getDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.dataInterval);
		};

		LightSensorBase.prototype.setDataInterval = function (dataInterval) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "u", value: dataInterval });
			var self = this;
			return (bp.send(this.channel, "BP_SETDATAINTERVAL").then(function (res) {
				self.data.dataInterval = dataInterval;
			}));
		};

		LightSensorBase.prototype.getMinDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minDataInterval);
		};

		LightSensorBase.prototype.getMaxDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxDataInterval);
		};

		LightSensorBase.prototype.getIlluminance = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.illuminance);
		};

		LightSensorBase.prototype.getMinIlluminance = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minIlluminance);
		};

		LightSensorBase.prototype.getMaxIlluminance = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxIlluminance);
		};

		LightSensorBase.prototype.getIlluminanceChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.illuminanceChangeTrigger);
		};

		LightSensorBase.prototype.setIlluminanceChangeTrigger = function (illuminanceChangeTrigger) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: illuminanceChangeTrigger });
			var self = this;
			return (bp.send(this.channel, "BP_SETCHANGETRIGGER").then(function (res) {
				self.data.illuminanceChangeTrigger = illuminanceChangeTrigger;
			}));
		};

		LightSensorBase.prototype.getMinIlluminanceChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minIlluminanceChangeTrigger);
		};

		LightSensorBase.prototype.getMaxIlluminanceChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxIlluminanceChangeTrigger);
		};

		LightSensorBase.prototype.handleIlluminanceChangeEvent = function (bp) {

			this.data.illuminance = bp.get("0");

			this.onIlluminanceChange(this.data.illuminance);
		};

		var LightSensor = function LightSensor() {
			LightSensorBase.apply(this, arguments);
		};
		LightSensor.prototype = Object.create(LightSensorBase.prototype);
		LightSensor.prototype.constructor = LightSensor;
		self.LightSensor = LightSensor;

		var MagnetometerBase = function MagnetometerBase() {
			Phidget.apply(this, arguments);
			this.name = "Magnetometer";
			this.class = 18;

			this.onMagneticFieldChange = function (magneticField, timestamp) { };
			this.onError = function (code, desc) { };
		};
		MagnetometerBase.prototype = Object.create(Phidget.prototype);
		MagnetometerBase.prototype.constructor = MagnetometerBase;

		MagnetometerBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		MagnetometerBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		MagnetometerBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 1 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
				case 0x12: // BP_FIELDSTRENGTHCHANGE
					this.handleMagneticFieldChangeEvent(bp);
					break;
			}
			return (true);
		};

		MagnetometerBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0x36: // BP_SETDATAINTERVAL
					this.data.dataInterval = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('DataInterval');
					return (true);
				case 0x2e: // BP_SETCHANGETRIGGER
					this.data.magneticFieldChangeTrigger = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('MagneticFieldChangeTrigger');
					return (true);
			}
		}

		MagnetometerBase.prototype.getAxisCount = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.axisCount);
		};

		MagnetometerBase.prototype.setCorrectionParameters = function (magField, offset0, offset1,
			offset2, gain0, gain1, gain2, T0, T1, T2, T3, T4, T5) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: magField });
			bp.set({ name: "1", type: "g", value: offset0 });
			bp.set({ name: "2", type: "g", value: offset1 });
			bp.set({ name: "3", type: "g", value: offset2 });
			bp.set({ name: "4", type: "g", value: gain0 });
			bp.set({ name: "5", type: "g", value: gain1 });
			bp.set({ name: "6", type: "g", value: gain2 });
			bp.set({ name: "7", type: "g", value: T0 });
			bp.set({ name: "8", type: "g", value: T1 });
			bp.set({ name: "9", type: "g", value: T2 });
			bp.set({ name: "10", type: "g", value: T3 });
			bp.set({ name: "11", type: "g", value: T4 });
			bp.set({ name: "12", type: "g", value: T5 });
			return (bp.send(this.channel, "BP_SETCORRECTIONPARAMETERS"));
		};

		MagnetometerBase.prototype.getDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.dataInterval);
		};

		MagnetometerBase.prototype.setDataInterval = function (dataInterval) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "u", value: dataInterval });
			var self = this;
			return (bp.send(this.channel, "BP_SETDATAINTERVAL").then(function (res) {
				self.data.dataInterval = dataInterval;
			}));
		};

		MagnetometerBase.prototype.getMinDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minDataInterval);
		};

		MagnetometerBase.prototype.getMaxDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxDataInterval);
		};

		MagnetometerBase.prototype.getMagneticField = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.magneticField);
		};

		MagnetometerBase.prototype.getMinMagneticField = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minMagneticField);
		};

		MagnetometerBase.prototype.getMaxMagneticField = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxMagneticField);
		};

		MagnetometerBase.prototype.getMagneticFieldChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.magneticFieldChangeTrigger);
		};

		MagnetometerBase.prototype.setMagneticFieldChangeTrigger = function (magneticFieldChangeTrigger) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: magneticFieldChangeTrigger });
			var self = this;
			return (bp.send(this.channel, "BP_SETCHANGETRIGGER").then(function (res) {
				self.data.magneticFieldChangeTrigger = magneticFieldChangeTrigger;
			}));
		};

		MagnetometerBase.prototype.getMinMagneticFieldChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minMagneticFieldChangeTrigger);
		};

		MagnetometerBase.prototype.getMaxMagneticFieldChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxMagneticFieldChangeTrigger);
		};

		MagnetometerBase.prototype.resetCorrectionParameters = function () {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			return (bp.send(this.channel, "BP_RESETCORRECTIONPARAMETERS"));
		};

		MagnetometerBase.prototype.saveCorrectionParameters = function () {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			return (bp.send(this.channel, "BP_SAVECORRECTIONPARAMETERS"));
		};

		MagnetometerBase.prototype.getTimestamp = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.timestamp);
		};

		MagnetometerBase.prototype.handleMagneticFieldChangeEvent = function (bp) {

			this.data.magneticField = bp.get("0");
			this.data.timestamp = bp.get("1");

			this.onMagneticFieldChange(this.data.magneticField, this.data.timestamp);
		};

		var Magnetometer = function Magnetometer() {
			MagnetometerBase.apply(this, arguments);
		};
		Magnetometer.prototype = Object.create(MagnetometerBase.prototype);
		Magnetometer.prototype.constructor = Magnetometer;
		self.Magnetometer = Magnetometer;

		var MotorPositionControllerBase = function MotorPositionControllerBase() {
			Phidget.apply(this, arguments);
			this.name = "MotorPositionController";
			this.class = 34;

			this.onPositionChange = function (position) { };
			this.onDutyCycleUpdate = function (dutyCycle) { };
			this.onError = function (code, desc) { };
		};
		MotorPositionControllerBase.prototype = Object.create(Phidget.prototype);
		MotorPositionControllerBase.prototype.constructor = MotorPositionControllerBase;

		MotorPositionControllerBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		MotorPositionControllerBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		MotorPositionControllerBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 0 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
				case 0x10: // BP_DUTYCYCLECHANGE
					this.handleDutyCycleUpdateEvent(bp);
					break;
				case 0x1d: // BP_POSITIONCHANGE
					this.handlePositionChangeEvent(bp);
					break;
			}
			return (true);
		};

		MotorPositionControllerBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0x28: // BP_SETACCELERATION
					this.data.acceleration = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('Acceleration');
					return (true);
				case 0x33: // BP_SETCURRENTLIMIT
					this.data.currentLimit = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('CurrentLimit');
					return (true);
				case 0x77: // BP_SETCURRENTREGULATORGAIN
					this.data.currentRegulatorGain = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('CurrentRegulatorGain');
					return (true);
				case 0x36: // BP_SETDATAINTERVAL
					this.data.dataInterval = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('DataInterval');
					return (true);
				case 0x78: // BP_SETDEADBAND
					this.data.deadBand = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('DeadBand');
					return (true);
				case 0x39: // BP_SETENGAGED
					this.data.engaged = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('Engaged');
					return (true);
				case 0x3a: // BP_SETFANMODE
					this.data.fanMode = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('FanMode');
					return (true);
				case 0x41: // BP_SETIOMODE
					this.data.IOMode = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('IOMode');
					return (true);
				case 0x88: // BP_SETKD
					this.data.kd = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('Kd');
					return (true);
				case 0x8e: // BP_SETKI
					this.data.ki = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('Ki');
					return (true);
				case 0x87: // BP_SETKP
					this.data.kp = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('Kp');
					return (true);
				case 0x8d: // BP_SETSTALLVELOCITY
					this.data.stallVelocity = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('StallVelocity');
					return (true);
				case 0x53: // BP_SETTARGETPOSITION
					this.data.targetPosition = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('TargetPosition');
					return (true);
				case 0x37: // BP_SETDUTYCYCLE
					this.data.velocityLimit = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('VelocityLimit');
					return (true);
			}
		}

		MotorPositionControllerBase.prototype.getCurrentLimit = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.currentLimit);
		};

		MotorPositionControllerBase.prototype.setCurrentLimit = function (currentLimit) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: currentLimit });
			var self = this;
			return (bp.send(this.channel, "BP_SETCURRENTLIMIT").then(function (res) {
				self.data.currentLimit = currentLimit;
			}));
		};

		MotorPositionControllerBase.prototype.getMinCurrentLimit = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minCurrentLimit);
		};

		MotorPositionControllerBase.prototype.getMaxCurrentLimit = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxCurrentLimit);
		};

		MotorPositionControllerBase.prototype.getCurrentRegulatorGain = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.currentRegulatorGain);
		};

		MotorPositionControllerBase.prototype.setCurrentRegulatorGain = function (currentRegulatorGain) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: currentRegulatorGain });
			var self = this;
			return (bp.send(this.channel, "BP_SETCURRENTREGULATORGAIN").then(function (res) {
				self.data.currentRegulatorGain = currentRegulatorGain;
			}));
		};

		MotorPositionControllerBase.prototype.getMinCurrentRegulatorGain = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minCurrentRegulatorGain);
		};

		MotorPositionControllerBase.prototype.getMaxCurrentRegulatorGain = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxCurrentRegulatorGain);
		};

		MotorPositionControllerBase.prototype.getDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.dataInterval);
		};

		MotorPositionControllerBase.prototype.setDataInterval = function (dataInterval) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "u", value: dataInterval });
			var self = this;
			return (bp.send(this.channel, "BP_SETDATAINTERVAL").then(function (res) {
				self.data.dataInterval = dataInterval;
			}));
		};

		MotorPositionControllerBase.prototype.getMinDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minDataInterval);
		};

		MotorPositionControllerBase.prototype.getMaxDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxDataInterval);
		};

		MotorPositionControllerBase.prototype.getDutyCycle = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.dutyCycle);
		};

		MotorPositionControllerBase.prototype.getEngaged = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (!!this.data.engaged);
		};

		MotorPositionControllerBase.prototype.setEngaged = function (engaged) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: engaged });
			var self = this;
			return (bp.send(this.channel, "BP_SETENGAGED").then(function (res) {
				self.data.engaged = engaged;
			}));
		};

		MotorPositionControllerBase.prototype.getFanMode = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.fanMode);
		};

		MotorPositionControllerBase.prototype.setFanMode = function (fanMode) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: fanMode });
			var self = this;
			return (bp.send(this.channel, "BP_SETFANMODE").then(function (res) {
				self.data.fanMode = fanMode;
			}));
		};

		MotorPositionControllerBase.prototype.getIOMode = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.IOMode);
		};

		MotorPositionControllerBase.prototype.setIOMode = function (IOMode) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: IOMode });
			var self = this;
			return (bp.send(this.channel, "BP_SETIOMODE").then(function (res) {
				self.data.IOMode = IOMode;
			}));
		};

		MotorPositionControllerBase.prototype.getKd = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.kd);
		};

		MotorPositionControllerBase.prototype.setKd = function (kd) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: kd });
			var self = this;
			return (bp.send(this.channel, "BP_SETKD").then(function (res) {
				self.data.kd = kd;
			}));
		};

		MotorPositionControllerBase.prototype.getKi = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.ki);
		};

		MotorPositionControllerBase.prototype.setKi = function (ki) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: ki });
			var self = this;
			return (bp.send(this.channel, "BP_SETKI").then(function (res) {
				self.data.ki = ki;
			}));
		};

		MotorPositionControllerBase.prototype.getKp = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.kp);
		};

		MotorPositionControllerBase.prototype.setKp = function (kp) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: kp });
			var self = this;
			return (bp.send(this.channel, "BP_SETKP").then(function (res) {
				self.data.kp = kp;
			}));
		};

		MotorPositionControllerBase.prototype.getRescaleFactor = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.rescaleFactor);
		};

		MotorPositionControllerBase.prototype.handleDutyCycleUpdateEvent = function (bp) {

			this.data.dutyCycle = bp.get("0");

			this.onDutyCycleUpdate(this.data.dutyCycle);
		};

		MotorPositionControllerBase.prototype.handlePositionChangeEvent = function (bp) {

			this.data.position = bp.get("0");

			this.onPositionChange(this.data.position);
		};

		var MotorPositionController = function MotorPositionController() {
			MotorPositionControllerBase.apply(this, arguments);
		};
		MotorPositionController.prototype = Object.create(MotorPositionControllerBase.prototype);
		MotorPositionController.prototype.constructor = MotorPositionController;
		self.MotorPositionController = MotorPositionController;


		MotorPositionController.prototype.getAcceleration = function () {

			if (this.data.acceleration == 1e300)
				throw (new Error("Acceleration not yet set"));
			else
				return (this.data.acceleration * this.data.rescaleFactor);
		};

		MotorPositionController.prototype.setAcceleration = function (acceleration) {

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "acceleration", type: "g", value: acceleration });
			bp.send(this.channel, "BP_SETACCELERATION", function () {
				this.data.acceleration = acceleration / this.data.rescaleFactor;
				if (typeof this.setAccelerationSuccess === "function")
					this.setAccelerationSuccess(acceleration);
			}.bind(this));
		};

		MotorPositionController.prototype.getMinAcceleration = function () {

			return (this.data.minAcceleration * this.data.rescaleFactor);
		};

		MotorPositionController.prototype.getMaxAcceleration = function () {

			return (this.data.maxAcceleration * this.data.rescaleFactor);
		};

		MotorPositionController.prototype.getDeadBand = function () {

			return (this.data.deadBand * this.data.rescaleFactor);
		};

		MotorPositionController.prototype.setDeadBand = function (deadBand) {

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "deadBand", type: "u", value: deadBand });
			bp.send(this.channel, "BP_SETDEADBAND", function () {
				this.data.deadBand = deadBand / this.data.rescaleFactor;
				if (typeof this.setDeadBandSuccess === "function")
					this.setDeadBandSuccess(deadBand);
			}.bind(this));
		};

		MotorPositionController.prototype.getPosition = function () {

			return ((this.data.position + this.data.positionOffset) * this.data.rescaleFactor);
		};

		MotorPositionController.prototype.getMinPosition = function () {

			return ((this.data.minPosition + this.data.positionOffset) * this.data.rescaleFactor);
		};

		MotorPositionController.prototype.getMaxPosition = function () {

			return ((this.data.maxPosition + this.data.positionOffset) * this.data.rescaleFactor);
		};

		MotorPositionController.prototype.setRescaleFactor = function (rescaleFactor) {

			this.data.rescaleFactor = rescaleFactor;
		};

		MotorPositionController.prototype.getTargetPosition = function () {

			return ((this.data.targetPosition + this.data.positionOffset) * this.data.rescaleFactor);
		};

		MotorPositionController.prototype.setTargetPosition = function (targetPosition) {

			var self = this;
			var calcPosition = (targetPosition / this.data.rescaleFactor) - this.data.positionOffset;

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "targetPosition", type: "l", value: calcPosition });
			return (bp.send(this.channel, "BP_SETTARGETPOSITION").then(function () {
				self.data.targetPosition = calcPosition;
				if (self.getEngaged() === true && self.getVelocityLimit() !== 0 && self.getPosition() !== self.getTargetPosition())
					self.data.isMoving = true;
			}));
		};

		MotorPositionController.prototype.getVelocityLimit = function () {

			if (this.data.velocityLimit == 1e300)
				throw (new Error("Velocity limit not yet set"));
			else
				return (this.data.velocityLimit * this.data.rescaleFactor);
		};

		MotorPositionController.prototype.setVelocityLimit = function (velocityLimit) {

			var self = this;
			var calcLimit = velocityLimit / this.data.rescaleFactor;

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "velocityLimit", type: "g", value: calcLimit });
			return (bp.send(this.channel, "BP_SETVELOCITYLIMIT").then(function () {
				self.data.velocityLimit = calcLimit;
				if (self.getEngaged() === true && self.getVelocityLimit() !== 0 && self.getPosition() !== self.getTargetPosition())
					self.data.isMoving = true;
			}));
		};

		MotorPositionController.prototype.getMaxVelocityLimit = function () {

			return (this.data.maxVelocityLimit * this.data.rescaleFactor);
		};

		MotorPositionController.prototype.getMinVelocityLimit = function () {

			return (this.data.minVelocityLimit * this.data.rescaleFactor);
		};

		MotorPositionController.prototype.addPositionOffset = function (positionOffset) {

			this.data.positionOffset += (positionOffset / this.data.rescaleFactor);
		};

		MotorPositionController.prototype.handlePositionChangeEvent = function (bp) {

			this.data.position = bp.get("0");

			this.onPositionChange((this.data.position + this.data.positionOffset) * this.data.rescaleFactor);
		};

		var PHSensorBase = function PHSensorBase() {
			Phidget.apply(this, arguments);
			this.name = "PHSensor";
			this.class = 37;

			this.onPHChange = function (PH) { };
			this.onError = function (code, desc) { };
		};
		PHSensorBase.prototype = Object.create(Phidget.prototype);
		PHSensorBase.prototype.constructor = PHSensorBase;

		PHSensorBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		PHSensorBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		PHSensorBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 0 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
				case 0x85: // BP_PHCHANGE
					this.handlePHChangeEvent(bp);
					break;
			}
			return (true);
		};

		PHSensorBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0x86: // BP_SETCORRECTIONTEMPERATURE
					this.data.correctionTemperature = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('CorrectionTemperature');
					return (true);
				case 0x36: // BP_SETDATAINTERVAL
					this.data.dataInterval = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('DataInterval');
					return (true);
				case 0x2e: // BP_SETCHANGETRIGGER
					this.data.PHChangeTrigger = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('PHChangeTrigger');
					return (true);
			}
		}

		PHSensorBase.prototype.getCorrectionTemperature = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.correctionTemperature);
		};

		PHSensorBase.prototype.setCorrectionTemperature = function (correctionTemperature) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: correctionTemperature });
			var self = this;
			return (bp.send(this.channel, "BP_SETCORRECTIONTEMPERATURE").then(function (res) {
				self.data.correctionTemperature = correctionTemperature;
			}));
		};

		PHSensorBase.prototype.getMinCorrectionTemperature = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minCorrectionTemperature);
		};

		PHSensorBase.prototype.getMaxCorrectionTemperature = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxCorrectionTemperature);
		};

		PHSensorBase.prototype.getDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.dataInterval);
		};

		PHSensorBase.prototype.setDataInterval = function (dataInterval) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "u", value: dataInterval });
			var self = this;
			return (bp.send(this.channel, "BP_SETDATAINTERVAL").then(function (res) {
				self.data.dataInterval = dataInterval;
			}));
		};

		PHSensorBase.prototype.getMinDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minDataInterval);
		};

		PHSensorBase.prototype.getMaxDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxDataInterval);
		};

		PHSensorBase.prototype.getPH = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.PH);
		};

		PHSensorBase.prototype.getMinPH = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minPH);
		};

		PHSensorBase.prototype.getMaxPH = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxPH);
		};

		PHSensorBase.prototype.getPHChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.PHChangeTrigger);
		};

		PHSensorBase.prototype.setPHChangeTrigger = function (PHChangeTrigger) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: PHChangeTrigger });
			var self = this;
			return (bp.send(this.channel, "BP_SETCHANGETRIGGER").then(function (res) {
				self.data.PHChangeTrigger = PHChangeTrigger;
			}));
		};

		PHSensorBase.prototype.getMinPHChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minPHChangeTrigger);
		};

		PHSensorBase.prototype.getMaxPHChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxPHChangeTrigger);
		};

		PHSensorBase.prototype.handlePHChangeEvent = function (bp) {

			this.data.PH = bp.get("0");

			this.onPHChange(this.data.PH);
		};

		var PHSensor = function PHSensor() {
			PHSensorBase.apply(this, arguments);
		};
		PHSensor.prototype = Object.create(PHSensorBase.prototype);
		PHSensor.prototype.constructor = PHSensor;
		self.PHSensor = PHSensor;


		var PowerGuardBase = function PowerGuardBase() {
			Phidget.apply(this, arguments);
			this.name = "PowerGuard";
			this.class = 20;

			this.onError = function (code, desc) { };
		};
		PowerGuardBase.prototype = Object.create(Phidget.prototype);
		PowerGuardBase.prototype.constructor = PowerGuardBase;

		PowerGuardBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		PowerGuardBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		PowerGuardBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 0 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
			}
			return (true);
		};

		PowerGuardBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0x3a: // BP_SETFANMODE
					this.data.fanMode = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('FanMode');
					return (true);
				case 0x47: // BP_SETOVERVOLTAGE
					this.data.overVoltage = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('OverVoltage');
					return (true);
				case 0x38: // BP_SETENABLED
					this.data.powerEnabled = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('PowerEnabled');
					return (true);
			}
		}

		PowerGuardBase.prototype.getFanMode = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.fanMode);
		};

		PowerGuardBase.prototype.setFanMode = function (fanMode) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: fanMode });
			var self = this;
			return (bp.send(this.channel, "BP_SETFANMODE").then(function (res) {
				self.data.fanMode = fanMode;
			}));
		};

		PowerGuardBase.prototype.getOverVoltage = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.overVoltage);
		};

		PowerGuardBase.prototype.setOverVoltage = function (overVoltage) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: overVoltage });
			var self = this;
			return (bp.send(this.channel, "BP_SETOVERVOLTAGE").then(function (res) {
				self.data.overVoltage = overVoltage;
			}));
		};

		PowerGuardBase.prototype.getMinOverVoltage = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minOverVoltage);
		};

		PowerGuardBase.prototype.getMaxOverVoltage = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxOverVoltage);
		};

		PowerGuardBase.prototype.getPowerEnabled = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (!!this.data.powerEnabled);
		};

		PowerGuardBase.prototype.setPowerEnabled = function (powerEnabled) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: powerEnabled });
			var self = this;
			return (bp.send(this.channel, "BP_SETENABLED").then(function (res) {
				self.data.powerEnabled = powerEnabled;
			}));
		};

		var PowerGuard = function PowerGuard() {
			PowerGuardBase.apply(this, arguments);
		};
		PowerGuard.prototype = Object.create(PowerGuardBase.prototype);
		PowerGuard.prototype.constructor = PowerGuard;
		self.PowerGuard = PowerGuard;

		var PressureSensorBase = function PressureSensorBase() {
			Phidget.apply(this, arguments);
			this.name = "PressureSensor";
			this.class = 21;

			this.onPressureChange = function (pressure) { };
			this.onError = function (code, desc) { };
		};
		PressureSensorBase.prototype = Object.create(Phidget.prototype);
		PressureSensorBase.prototype.constructor = PressureSensorBase;

		PressureSensorBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		PressureSensorBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		PressureSensorBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 0 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
				case 0x1f: // BP_PRESSURECHANGE
					this.handlePressureChangeEvent(bp);
					break;
			}
			return (true);
		};

		PressureSensorBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0x36: // BP_SETDATAINTERVAL
					this.data.dataInterval = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('DataInterval');
					return (true);
				case 0x2e: // BP_SETCHANGETRIGGER
					this.data.pressureChangeTrigger = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('PressureChangeTrigger');
					return (true);
			}
		}

		PressureSensorBase.prototype.getDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.dataInterval);
		};

		PressureSensorBase.prototype.setDataInterval = function (dataInterval) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "u", value: dataInterval });
			var self = this;
			return (bp.send(this.channel, "BP_SETDATAINTERVAL").then(function (res) {
				self.data.dataInterval = dataInterval;
			}));
		};

		PressureSensorBase.prototype.getMinDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minDataInterval);
		};

		PressureSensorBase.prototype.getMaxDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxDataInterval);
		};

		PressureSensorBase.prototype.getPressure = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.pressure);
		};

		PressureSensorBase.prototype.getMinPressure = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minPressure);
		};

		PressureSensorBase.prototype.getMaxPressure = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxPressure);
		};

		PressureSensorBase.prototype.getPressureChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.pressureChangeTrigger);
		};

		PressureSensorBase.prototype.setPressureChangeTrigger = function (pressureChangeTrigger) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: pressureChangeTrigger });
			var self = this;
			return (bp.send(this.channel, "BP_SETCHANGETRIGGER").then(function (res) {
				self.data.pressureChangeTrigger = pressureChangeTrigger;
			}));
		};

		PressureSensorBase.prototype.getMinPressureChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minPressureChangeTrigger);
		};

		PressureSensorBase.prototype.getMaxPressureChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxPressureChangeTrigger);
		};

		PressureSensorBase.prototype.handlePressureChangeEvent = function (bp) {

			this.data.pressure = bp.get("0");

			this.onPressureChange(this.data.pressure);
		};

		var PressureSensor = function PressureSensor() {
			PressureSensorBase.apply(this, arguments);
		};
		PressureSensor.prototype = Object.create(PressureSensorBase.prototype);
		PressureSensor.prototype.constructor = PressureSensor;
		self.PressureSensor = PressureSensor;

		var RCServoBase = function RCServoBase() {
			Phidget.apply(this, arguments);
			this.name = "RCServo";
			this.class = 22;

			this.onPositionChange = function (position) { };
			this.onVelocityChange = function (velocity) { };
			this.onTargetPositionReached = function (position) { };
			this.onError = function (code, desc) { };
		};
		RCServoBase.prototype = Object.create(Phidget.prototype);
		RCServoBase.prototype.constructor = RCServoBase;

		RCServoBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		RCServoBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		RCServoBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 3 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
				case 0x1d: // BP_POSITIONCHANGE
					this.handlePositionChangeEvent(bp);
					break;
				case 0x5e: // BP_TARGETPOSITIONREACHED
					this.handleTargetPositionReachedEvent(bp);
					break;
				case 0x64: // BP_VELOCITYCHANGE
					this.handleVelocityChangeEvent(bp);
					break;
			}
			return (true);
		};

		RCServoBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0x28: // BP_SETACCELERATION
					this.data.acceleration = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('Acceleration');
					return (true);
				case 0x36: // BP_SETDATAINTERVAL
					this.data.dataInterval = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('DataInterval');
					return (true);
				case 0x39: // BP_SETENGAGED
					this.data.engaged = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('Engaged');
					return (true);
				case 0x46: // BP_SETMINPULSEWIDTH
					this.data.minPulseWidth = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('MinPulseWidth');
					return (true);
				case 0x45: // BP_SETMAXPULSEWIDTH
					this.data.maxPulseWidth = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('MaxPulseWidth');
					return (true);
				case 0x51: // BP_SETSPEEDRAMPINGSTATE
					this.data.speedRampingState = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('SpeedRampingState');
					return (true);
				case 0x53: // BP_SETTARGETPOSITION
					this.data.targetPosition = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('TargetPosition');
					return (true);
				case 0x37: // BP_SETDUTYCYCLE
					this.data.torque = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('Torque');
					return (true);
				case 0x55: // BP_SETVELOCITYLIMIT
					this.data.velocityLimit = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('VelocityLimit');
					return (true);
				case 0x56: // BP_SETVOLTAGE
					this.data.voltage = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('Voltage');
					return (true);
			}
		}

		RCServoBase.prototype.getDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.dataInterval);
		};

		RCServoBase.prototype.setDataInterval = function (dataInterval) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "u", value: dataInterval });
			var self = this;
			return (bp.send(this.channel, "BP_SETDATAINTERVAL").then(function (res) {
				self.data.dataInterval = dataInterval;
			}));
		};

		RCServoBase.prototype.getMinDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minDataInterval);
		};

		RCServoBase.prototype.getMaxDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxDataInterval);
		};

		RCServoBase.prototype.getEngaged = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (!!this.data.engaged);
		};

		RCServoBase.prototype.setEngaged = function (engaged) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: engaged });
			var self = this;
			return (bp.send(this.channel, "BP_SETENGAGED").then(function (res) {
				self.data.engaged = engaged;
			}));
		};

		RCServoBase.prototype.getIsMoving = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (!!this.data.isMoving);
		};

		RCServoBase.prototype.getMinPosition = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minPosition);
		};

		RCServoBase.prototype.getMaxPosition = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxPosition);
		};

		RCServoBase.prototype.setMinPulseWidth = function (minPulseWidth) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: minPulseWidth });
			var self = this;
			return (bp.send(this.channel, "BP_SETMINPULSEWIDTH").then(function (res) {
				self.data.minPulseWidth = minPulseWidth;
			}));
		};

		RCServoBase.prototype.getMinPulseWidth = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minPulseWidth);
		};

		RCServoBase.prototype.setMaxPulseWidth = function (maxPulseWidth) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: maxPulseWidth });
			var self = this;
			return (bp.send(this.channel, "BP_SETMAXPULSEWIDTH").then(function (res) {
				self.data.maxPulseWidth = maxPulseWidth;
			}));
		};

		RCServoBase.prototype.getMaxPulseWidth = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxPulseWidth);
		};

		RCServoBase.prototype.getMinPulseWidthLimit = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minPulseWidthLimit);
		};

		RCServoBase.prototype.getMaxPulseWidthLimit = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxPulseWidthLimit);
		};

		RCServoBase.prototype.getSpeedRampingState = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (!!this.data.speedRampingState);
		};

		RCServoBase.prototype.setSpeedRampingState = function (speedRampingState) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: speedRampingState });
			var self = this;
			return (bp.send(this.channel, "BP_SETSPEEDRAMPINGSTATE").then(function (res) {
				self.data.speedRampingState = speedRampingState;
			}));
		};

		RCServoBase.prototype.getTorque = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.torque);
		};

		RCServoBase.prototype.setTorque = function (torque) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: torque });
			var self = this;
			return (bp.send(this.channel, "BP_SETDUTYCYCLE").then(function (res) {
				self.data.torque = torque;
			}));
		};

		RCServoBase.prototype.getMinTorque = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minTorque);
		};

		RCServoBase.prototype.getMaxTorque = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxTorque);
		};

		RCServoBase.prototype.getVoltage = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.voltage);
		};

		RCServoBase.prototype.setVoltage = function (voltage) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: voltage });
			var self = this;
			return (bp.send(this.channel, "BP_SETVOLTAGE").then(function (res) {
				self.data.voltage = voltage;
			}));
		};

		RCServoBase.prototype.handlePositionChangeEvent = function (bp) {

			this.data.position = bp.get("0");

			this.onPositionChange(this.data.position);
		};

		RCServoBase.prototype.handleTargetPositionReachedEvent = function (bp) {

			this.data.position = bp.get("0");

			this.onTargetPositionReached(this.data.position);
		};

		RCServoBase.prototype.handleVelocityChangeEvent = function (bp) {

			this.data.velocity = bp.get("0");

			this.onVelocityChange(this.data.velocity);
		};

		var RCServo = function RCServo() {
			RCServoBase.apply(this, arguments);
		};
		RCServo.prototype = Object.create(RCServoBase.prototype);
		RCServo.prototype.constructor = RCServo;

		RCServo.prototype.positionUser = function (position_us) {

			return (this.data.minPosition +
				((position_us - this.data.minPulseWidth) / (this.data.maxPulseWidth - this.data.minPulseWidth)) *
				this.data.maxPosition - this.data.minPosition);
		}

		RCServo.prototype.positionUS = function (position_user) {


			if (this.data.maxPosition > this.data.minPosition)
				return (this.data.minPulseWidth +
					((this.data.maxPulseWidth - this.data.minPulseWidth) *
						(position_user - this.data.minPosition)) /
					(this.data.maxPosition - this.data.minPosition));

			return (this.data.maxPulseWidth +
				((this.data.maxPulseWidth - this.data.minPulseWidth) *
					(position_user - this.data.maxPosition)) /
				(this.data.maxPosition - this.data.minPosition));
		}

		RCServo.prototype.velocityUser = function (velocity_us) {

			return ((Math.abs((this.data.maxPosition - this.data.minPosition)) * velocity_us) /
				(this.data.maxPulseWidth - this.data.minPulseWidth));
		}
		RCServo.prototype.velocityUS = function (velocity_user) {

			return (((this.data.maxPulseWidth - this.data.minPulseWidth) * velocity_user) /
				Math.abs(this.data.maxPosition - this.data.minPosition));
		}
		RCServo.prototype.accelUser = function (accel_us) {

			return (((Math.abs((this.data.maxPosition - this.data.minPosition)) * accel_us) /
				(this.data.maxPulseWidth - this.data.minPulseWidth)));
		}

		RCServo.prototype.accelUS = function (accel_user) {

			return (((this.data.maxPulseWidth - this.data.minPulseWidth) * accel_user) /
				Math.abs(this.data.maxPosition - this.data.minPosition));
		}

		RCServo.prototype.getAcceleration = function () {

			return (this.accelUser(this.data.acceleration));
		};

		RCServo.prototype.getMinAcceleration = function () {

			return (this.accelUser(this.data.minAcceleration));
		};

		RCServo.prototype.getMaxAcceleration = function () {

			return (this.accelUser(this.data.maxAcceleration));
		};

		RCServo.prototype.getPosition = function () {

			return (this.positionUser(this.data.position));
		};

		RCServo.prototype.setMaxPosition = function (maxPosition) {

			this.data.maxPosition = maxPosition;
		};

		RCServo.prototype.setMinPosition = function (minPosition) {

			this.data.minPosition = minPosition;
		};

		RCServo.prototype.getTargetPosition = function () {

			return (this.positionUser(this.data.targetPosition));
		};

		RCServo.prototype.getVelocity = function () {

			return (this.velocityUser(this.data.velocity));
		};

		RCServo.prototype.getMinVelocity = function () {

			return (this.velocityUser(this.data.minVelocity));
		};

		RCServo.prototype.getMaxVelocity = function () {

			return (this.velocityUser(this.data.maxVelocity));
		};

		RCServo.prototype.getVelocityLimit = function () {

			return (this.velocityUser(this.data.velocityLimit));
		};

		RCServo.prototype.getMinVelocityLimit = function () {

			return (this.velocityUser(this.data.minVelocityLimit));
		};

		RCServo.prototype.getMaxVelocityLimit = function () {

			return (this.velocityUser(this.data.maxVelocityLimit));
		};

		RCServo.prototype.setAcceleration = function (acceleration) {

			var self = this;

			acceleration = this.accelUS(acceleration);
			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "acceleration", type: "g", value: acceleration });
			return (bp.send(this.channel, "BP_SETACCELERATION").then(function () {
				self.data.acceleration = acceleration;
			}));
		};

		RCServo.prototype.setTargetPosition = function (targetPosition) {

			var self = this;

			targetPosition = this.positionUS(targetPosition);
			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "targetPosition", type: "g", value: targetPosition });
			return (bp.send(this.channel, "BP_SETTARGETPOSITION").then(function () {
				self.data.targetPosition = targetPosition;
				if (self.getEngaged() === true && self.getVelocityLimit() !== 0 && self.getPosition() !== self.getTargetPosition())
					self.data.isMoving = true;
			}));
		};

		RCServo.prototype.setVelocityLimit = function (velocityLimit) {

			var self = this;

			velocityLimit = this.velocityUS(velocityLimit);
			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "velocityLimit", type: "g", value: velocityLimit });
			return (bp.send(this.channel, "BP_SETVELOCITYLIMIT").then(function () {
				self.data.velocityLimit = velocityLimit;
			}));
		};

		/*
		RCServo.prototype.setMinPulseWidth = function(minPulseWidth) {
		
			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "velocityLimit", type: "g", value: minPulseWidth});
			return (bp.send(this.channel, "BP_SETMINPULSEWIDTH").then(function () {
				this.data.minPulseWidth = minPulseWidth;
			}));
		};
		
		RCServo.prototype.setMaxPulseWidth = function(maxPulseWidth) {
		
			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "velocityLimit", type: "g", value: maxPulseWidth});
			return (bp.send(this.channel, "BP_SETMAXPULSEWIDTH").then(function () {
				this.data.maxPulseWidth = maxPulseWidth;
			}));
		};
		*/

		RCServo.prototype.handlePositionChangeEvent = function (bp) {

			this.data.position = bp.get("0");
			this.onPositionChange(this.positionUser(this.data.position));
		};

		RCServo.prototype.handleTargetPositionReachedEvent = function (bp) {

			this.data.position = bp.get("0");
			this.data.isMoving = false;
			this.onTargetPositionReached(this.positionUser(this.data.position));
		};

		RCServo.prototype.handleVelocityChangeEvent = function (bp) {

			this.data.velocity = bp.get("0");
			this.onVelocityChange(this.velocityUser(this.data.velocity));
		};

		self.RCServo = RCServo;
		var ResistanceInputBase = function ResistanceInputBase() {
			Phidget.apply(this, arguments);
			this.name = "ResistanceInput";
			this.class = 23;

			this.onResistanceChange = function (resistance) { };
			this.onError = function (code, desc) { };
		};
		ResistanceInputBase.prototype = Object.create(Phidget.prototype);
		ResistanceInputBase.prototype.constructor = ResistanceInputBase;

		ResistanceInputBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		ResistanceInputBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		ResistanceInputBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 0 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
				case 0x24: // BP_RESISTANCECHANGE
					this.handleResistanceChangeEvent(bp);
					break;
			}
			return (true);
		};

		ResistanceInputBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0x36: // BP_SETDATAINTERVAL
					this.data.dataInterval = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('DataInterval');
					return (true);
				case 0x2e: // BP_SETCHANGETRIGGER
					this.data.resistanceChangeTrigger = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('ResistanceChangeTrigger');
					return (true);
				case 0x4d: // BP_SETRTDWIRESETUP
					this.data.RTDWireSetup = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('RTDWireSetup');
					return (true);
			}
		}

		ResistanceInputBase.prototype.getDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.dataInterval);
		};

		ResistanceInputBase.prototype.setDataInterval = function (dataInterval) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "u", value: dataInterval });
			var self = this;
			return (bp.send(this.channel, "BP_SETDATAINTERVAL").then(function (res) {
				self.data.dataInterval = dataInterval;
			}));
		};

		ResistanceInputBase.prototype.getMinDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minDataInterval);
		};

		ResistanceInputBase.prototype.getMaxDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxDataInterval);
		};

		ResistanceInputBase.prototype.getResistance = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.resistance);
		};

		ResistanceInputBase.prototype.getMinResistance = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minResistance);
		};

		ResistanceInputBase.prototype.getMaxResistance = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxResistance);
		};

		ResistanceInputBase.prototype.getResistanceChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.resistanceChangeTrigger);
		};

		ResistanceInputBase.prototype.setResistanceChangeTrigger = function (resistanceChangeTrigger) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: resistanceChangeTrigger });
			var self = this;
			return (bp.send(this.channel, "BP_SETCHANGETRIGGER").then(function (res) {
				self.data.resistanceChangeTrigger = resistanceChangeTrigger;
			}));
		};

		ResistanceInputBase.prototype.getMinResistanceChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minResistanceChangeTrigger);
		};

		ResistanceInputBase.prototype.getMaxResistanceChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxResistanceChangeTrigger);
		};

		ResistanceInputBase.prototype.getRTDWireSetup = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.RTDWireSetup);
		};

		ResistanceInputBase.prototype.setRTDWireSetup = function (RTDWireSetup) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: RTDWireSetup });
			var self = this;
			return (bp.send(this.channel, "BP_SETRTDWIRESETUP").then(function (res) {
				self.data.RTDWireSetup = RTDWireSetup;
			}));
		};

		ResistanceInputBase.prototype.handleResistanceChangeEvent = function (bp) {

			this.data.resistance = bp.get("0");

			this.onResistanceChange(this.data.resistance);
		};

		var ResistanceInput = function ResistanceInput() {
			ResistanceInputBase.apply(this, arguments);
		};
		ResistanceInput.prototype = Object.create(ResistanceInputBase.prototype);
		ResistanceInput.prototype.constructor = ResistanceInput;
		self.ResistanceInput = ResistanceInput;

		var RFIDBase = function RFIDBase() {
			Phidget.apply(this, arguments);
			this.name = "RFID";
			this.class = 24;

			this.onTag = function (Tag, Protocol) { };
			this.onTagLost = function (Tag, Protocol) { };
			this.onError = function (code, desc) { };
		};
		RFIDBase.prototype = Object.create(Phidget.prototype);
		RFIDBase.prototype.constructor = RFIDBase;

		RFIDBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		RFIDBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		RFIDBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 1 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
				case 0x5c: // BP_TAG
					this.handleTagEvent(bp);
					break;
				case 0x5d: // BP_TAGLOST
					this.handleTagLostEvent(bp);
					break;
			}
			return (true);
		};

		RFIDBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0x29: // BP_SETANTENNAON
					this.data.antennaEnabled = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('AntennaEnabled');
					return (true);
			}
		}

		RFIDBase.prototype.getAntennaEnabled = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (!!this.data.antennaEnabled);
		};

		RFIDBase.prototype.setAntennaEnabled = function (antennaEnabled) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: antennaEnabled });
			var self = this;
			return (bp.send(this.channel, "BP_SETANTENNAON").then(function (res) {
				self.data.antennaEnabled = antennaEnabled;
			}));
		};

		RFIDBase.prototype.getTagPresent = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (!!this.data.tagPresent);
		};

		RFIDBase.prototype.write = function (tagString, protocol, lockTag) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "s", value: tagString });
			bp.set({ name: "1", type: "d", value: protocol });
			bp.set({ name: "2", type: "d", value: lockTag });
			return (bp.send(this.channel, "BP_WRITE"));
		};

		RFIDBase.prototype.handleTagEvent = function (bp) {

			var tag = bp.get("0");
			var protocol = bp.get("1");

			this.onTag(tag, protocol);
		};

		RFIDBase.prototype.handleTagLostEvent = function (bp) {

			var tag = bp.get("0");
			var protocol = bp.get("1");

			this.onTagLost(tag, protocol);
		};

		var RFID = function RFID() {
			RFIDBase.apply(this, arguments);
		};
		RFID.prototype = Object.create(RFIDBase.prototype);
		RFID.prototype.constructor = RFID;
		self.RFID = RFID;

		RFID.prototype.getLastTag = function () {
		};


		var SoundSensorBase = function SoundSensorBase() {
			Phidget.apply(this, arguments);
			this.name = "SoundSensor";
			this.class = 25;

			this.onSPLChange = function (dB, dBA, dBC, Octaves) { };
			this.onError = function (code, desc) { };
		};
		SoundSensorBase.prototype = Object.create(Phidget.prototype);
		SoundSensorBase.prototype.constructor = SoundSensorBase;

		SoundSensorBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		SoundSensorBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		SoundSensorBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 1 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
				case 0xb: // BP_DBCHANGE
					this.handleSPLChangeEvent(bp);
					break;
			}
			return (true);
		};

		SoundSensorBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0x36: // BP_SETDATAINTERVAL
					this.data.dataInterval = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('DataInterval');
					return (true);
				case 0x2e: // BP_SETCHANGETRIGGER
					this.data.SPLChangeTrigger = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('SPLChangeTrigger');
					return (true);
				case 0x74: // BP_SETSPLRANGE
					this.data.SPLRange = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('SPLRange');
					return (true);
			}
		}

		SoundSensorBase.prototype.getDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.dataInterval);
		};

		SoundSensorBase.prototype.setDataInterval = function (dataInterval) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "u", value: dataInterval });
			var self = this;
			return (bp.send(this.channel, "BP_SETDATAINTERVAL").then(function (res) {
				self.data.dataInterval = dataInterval;
			}));
		};

		SoundSensorBase.prototype.getMinDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minDataInterval);
		};

		SoundSensorBase.prototype.getMaxDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxDataInterval);
		};

		SoundSensorBase.prototype.getdB = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.dB);
		};

		SoundSensorBase.prototype.getMaxdB = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxdB);
		};

		SoundSensorBase.prototype.getdBA = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.dBA);
		};

		SoundSensorBase.prototype.getdBC = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.dBC);
		};

		SoundSensorBase.prototype.getNoiseFloor = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.noiseFloor);
		};

		SoundSensorBase.prototype.getOctaves = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.octaves);
		};

		SoundSensorBase.prototype.getSPLChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.SPLChangeTrigger);
		};

		SoundSensorBase.prototype.setSPLChangeTrigger = function (SPLChangeTrigger) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: SPLChangeTrigger });
			var self = this;
			return (bp.send(this.channel, "BP_SETCHANGETRIGGER").then(function (res) {
				self.data.SPLChangeTrigger = SPLChangeTrigger;
			}));
		};

		SoundSensorBase.prototype.getMinSPLChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minSPLChangeTrigger);
		};

		SoundSensorBase.prototype.getMaxSPLChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxSPLChangeTrigger);
		};

		SoundSensorBase.prototype.getSPLRange = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.SPLRange);
		};

		SoundSensorBase.prototype.setSPLRange = function (SPLRange) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: SPLRange });
			var self = this;
			return (bp.send(this.channel, "BP_SETSPLRANGE").then(function (res) {
				self.data.SPLRange = SPLRange;
			}));
		};

		SoundSensorBase.prototype.handleSPLChangeEvent = function (bp) {

			this.data.dB = bp.get("0");
			this.data.dBA = bp.get("1");
			this.data.dBC = bp.get("2");
			this.data.octaves = bp.get("3");

			this.onSPLChange(this.data.dB, this.data.dBA, this.data.dBC, this.data.octaves);
		};

		var SoundSensor = function SoundSensor() {
			SoundSensorBase.apply(this, arguments);
		};
		SoundSensor.prototype = Object.create(SoundSensorBase.prototype);
		SoundSensor.prototype.constructor = SoundSensor;
		self.SoundSensor = SoundSensor;


		var SpatialBase = function SpatialBase() {
			Phidget.apply(this, arguments);
			this.name = "Spatial";
			this.class = 26;

			this.onSpatialData = function (acceleration, angularRate, magneticField, timestamp) { };
			this.onError = function (code, desc) { };
		};
		SpatialBase.prototype = Object.create(Phidget.prototype);
		SpatialBase.prototype.constructor = SpatialBase;

		SpatialBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		SpatialBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		SpatialBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 1 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
				case 0x59: // BP_SPATIALDATA
					this.handleSpatialDataEvent(bp);
					break;
			}
			return (true);
		};

		SpatialBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0x36: // BP_SETDATAINTERVAL
					this.data.dataInterval = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('DataInterval');
					return (true);
			}
		}

		SpatialBase.prototype.getDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.dataInterval);
		};

		SpatialBase.prototype.setDataInterval = function (dataInterval) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "u", value: dataInterval });
			var self = this;
			return (bp.send(this.channel, "BP_SETDATAINTERVAL").then(function (res) {
				self.data.dataInterval = dataInterval;
			}));
		};

		SpatialBase.prototype.getMinDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minDataInterval);
		};

		SpatialBase.prototype.getMaxDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxDataInterval);
		};

		SpatialBase.prototype.setMagnetometerCorrectionParameters = function (magField, offset0, offset1,
			offset2, gain0, gain1, gain2, T0, T1, T2, T3, T4, T5) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: magField });
			bp.set({ name: "1", type: "g", value: offset0 });
			bp.set({ name: "2", type: "g", value: offset1 });
			bp.set({ name: "3", type: "g", value: offset2 });
			bp.set({ name: "4", type: "g", value: gain0 });
			bp.set({ name: "5", type: "g", value: gain1 });
			bp.set({ name: "6", type: "g", value: gain2 });
			bp.set({ name: "7", type: "g", value: T0 });
			bp.set({ name: "8", type: "g", value: T1 });
			bp.set({ name: "9", type: "g", value: T2 });
			bp.set({ name: "10", type: "g", value: T3 });
			bp.set({ name: "11", type: "g", value: T4 });
			bp.set({ name: "12", type: "g", value: T5 });
			return (bp.send(this.channel, "BP_SETCORRECTIONPARAMETERS"));
		};

		SpatialBase.prototype.resetMagnetometerCorrectionParameters = function () {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			return (bp.send(this.channel, "BP_RESETCORRECTIONPARAMETERS"));
		};

		SpatialBase.prototype.saveMagnetometerCorrectionParameters = function () {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			return (bp.send(this.channel, "BP_SAVECORRECTIONPARAMETERS"));
		};

		SpatialBase.prototype.zeroGyro = function () {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			return (bp.send(this.channel, "BP_ZERO"));
		};

		SpatialBase.prototype.handleSpatialDataEvent = function (bp) {

			var acceleration = bp.get("0");
			var angularRate = bp.get("1");
			var magneticField = bp.get("2");
			var timestamp = bp.get("3");

			this.onSpatialData(acceleration, angularRate, magneticField, timestamp);
		};

		var Spatial = function Spatial() {
			SpatialBase.apply(this, arguments);
		};
		Spatial.prototype = Object.create(SpatialBase.prototype);
		Spatial.prototype.constructor = Spatial;
		self.Spatial = Spatial;

		var StepperBase = function StepperBase() {
			Phidget.apply(this, arguments);
			this.name = "Stepper";
			this.class = 27;

			this.onPositionChange = function (position) { };
			this.onVelocityChange = function (velocity) { };
			this.onStopped = function () { };
			this.onError = function (code, desc) { };
		};
		StepperBase.prototype = Object.create(Phidget.prototype);
		StepperBase.prototype.constructor = StepperBase;

		StepperBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		StepperBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		StepperBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 2 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
				case 0x1d: // BP_POSITIONCHANGE
					this.handlePositionChangeEvent(bp);
					break;
				case 0x5b: // BP_STOPPED
					this.handleStoppedEvent(bp);
					break;
				case 0x64: // BP_VELOCITYCHANGE
					this.handleVelocityChangeEvent(bp);
					break;
			}
			return (true);
		};

		StepperBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0x28: // BP_SETACCELERATION
					this.data.acceleration = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('Acceleration');
					return (true);
				case 0x31: // BP_SETCONTROLMODE
					this.data.controlMode = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('ControlMode');
					return (true);
				case 0x33: // BP_SETCURRENTLIMIT
					this.data.currentLimit = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('CurrentLimit');
					return (true);
				case 0x36: // BP_SETDATAINTERVAL
					this.data.dataInterval = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('DataInterval');
					return (true);
				case 0x39: // BP_SETENGAGED
					this.data.engaged = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('Engaged');
					return (true);
				case 0x3f: // BP_SETHOLDINGCURRENTLIMIT
					this.data.holdingCurrentLimit = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('HoldingCurrentLimit');
					return (true);
				case 0x53: // BP_SETTARGETPOSITION
					this.data.targetPosition = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('TargetPosition');
					return (true);
				case 0x55: // BP_SETVELOCITYLIMIT
					this.data.velocityLimit = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('VelocityLimit');
					return (true);
			}
		}

		StepperBase.prototype.getControlMode = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.controlMode);
		};

		StepperBase.prototype.setControlMode = function (controlMode) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: controlMode });
			var self = this;
			return (bp.send(this.channel, "BP_SETCONTROLMODE").then(function (res) {
				self.data.controlMode = controlMode;
			}));
		};

		StepperBase.prototype.getCurrentLimit = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.currentLimit);
		};

		StepperBase.prototype.setCurrentLimit = function (currentLimit) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: currentLimit });
			var self = this;
			return (bp.send(this.channel, "BP_SETCURRENTLIMIT").then(function (res) {
				self.data.currentLimit = currentLimit;
			}));
		};

		StepperBase.prototype.getMinCurrentLimit = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minCurrentLimit);
		};

		StepperBase.prototype.getMaxCurrentLimit = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxCurrentLimit);
		};

		StepperBase.prototype.getDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.dataInterval);
		};

		StepperBase.prototype.setDataInterval = function (dataInterval) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "u", value: dataInterval });
			var self = this;
			return (bp.send(this.channel, "BP_SETDATAINTERVAL").then(function (res) {
				self.data.dataInterval = dataInterval;
			}));
		};

		StepperBase.prototype.getMinDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minDataInterval);
		};

		StepperBase.prototype.getMaxDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxDataInterval);
		};

		StepperBase.prototype.getEngaged = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (!!this.data.engaged);
		};

		StepperBase.prototype.setEngaged = function (engaged) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: engaged });
			var self = this;
			return (bp.send(this.channel, "BP_SETENGAGED").then(function (res) {
				self.data.engaged = engaged;
			}));
		};

		StepperBase.prototype.getHoldingCurrentLimit = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.holdingCurrentLimit);
		};

		StepperBase.prototype.setHoldingCurrentLimit = function (holdingCurrentLimit) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: holdingCurrentLimit });
			var self = this;
			return (bp.send(this.channel, "BP_SETHOLDINGCURRENTLIMIT").then(function (res) {
				self.data.holdingCurrentLimit = holdingCurrentLimit;
			}));
		};

		StepperBase.prototype.getIsMoving = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (!!this.data.isMoving);
		};

		StepperBase.prototype.getRescaleFactor = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.rescaleFactor);
		};

		StepperBase.prototype.handlePositionChangeEvent = function (bp) {

			this.data.position = bp.get("0");

			this.onPositionChange(this.data.position);
		};

		StepperBase.prototype.handleStoppedEvent = function (bp) {


			this.onStopped();
		};

		StepperBase.prototype.handleVelocityChangeEvent = function (bp) {

			this.data.velocity = bp.get("0");

			this.onVelocityChange(this.data.velocity);
		};

		var Stepper = function Stepper() {
			StepperBase.apply(this, arguments);
		};
		Stepper.prototype = Object.create(StepperBase.prototype);
		Stepper.prototype.constructor = Stepper;

		Stepper.prototype.getAcceleration = function () {

			if (this.data.acceleration == 1e300)
				throw (new Error("Acceleration not yet set"));
			else
				return (this.data.acceleration * this.data.rescaleFactor);
		};

		Stepper.prototype.setAcceleration = function (acceleration) {

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "acceleration", type: "g", value: acceleration });
			bp.send(this.channel, "BP_SETACCELERATION", function () {
				this.data.acceleration = acceleration / this.data.rescaleFactor;
				if (typeof this.setAccelerationSuccess === "function")
					this.setAccelerationSuccess(acceleration);
			}.bind(this));
		};

		Stepper.prototype.getMinAcceleration = function () {

			return (this.data.minAcceleration * this.data.rescaleFactor);
		};

		Stepper.prototype.getMaxAcceleration = function () {

			return (this.data.maxAcceleration * this.data.rescaleFactor);
		};

		Stepper.prototype.getPosition = function () {

			return ((this.data.position + this.data.positionOffset) * this.data.rescaleFactor);
		};

		Stepper.prototype.getMinPosition = function () {

			return ((this.data.minPosition + this.data.positionOffset) * this.data.rescaleFactor);
		};

		Stepper.prototype.getMaxPosition = function () {

			return ((this.data.maxPosition + this.data.positionOffset) * this.data.rescaleFactor);
		};

		Stepper.prototype.setRescaleFactor = function (rescaleFactor) {

			this.data.rescaleFactor = rescaleFactor;
		};

		Stepper.prototype.getTargetPosition = function () {

			return ((this.data.targetPosition + this.data.positionOffset) * this.data.rescaleFactor);
		};

		Stepper.prototype.setTargetPosition = function (targetPosition) {
			var self = this;
			var calcPosition = (targetPosition / this.data.rescaleFactor) - this.data.positionOffset;

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "targetPosition", type: "l", value: calcPosition });
			return (bp.send(this.channel, "BP_SETTARGETPOSITION").then(function () {
				self.data.targetPosition = calcPosition;
				if (self.getEngaged() === true && self.getVelocityLimit() !== 0 && self.getPosition() !== self.getTargetPosition())
					self.data.isMoving = true;
			}));
		};

		Stepper.prototype.getVelocity = function () {

			return (this.data.velocity * this.data.rescaleFactor);
		};

		Stepper.prototype.getMaxVelocity = function () {

			return (this.data.maxVelocity * this.data.rescaleFactor);
		};

		Stepper.prototype.getVelocityLimit = function () {

			if (this.data.velocityLimit == 1e300)
				throw (new Error("Velocity limit not yet set"));
			else
				return (this.data.velocityLimit * this.data.rescaleFactor);
		};

		Stepper.prototype.setVelocityLimit = function (velocityLimit) {
			var self = this;
			var calcLimit = velocityLimit / this.data.rescaleFactor;

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "velocityLimit", type: "g", value: calcLimit });
			return (bp.send(this.channel, "BP_SETVELOCITYLIMIT").then(function () {
				self.data.velocityLimit = calcLimit;
				if (self.getEngaged() === true && self.getVelocityLimit() !== 0 && self.getPosition() !== self.getTargetPosition())
					self.data.isMoving = true;
			}));
		};

		Stepper.prototype.getMaxVelocityLimit = function () {

			return (this.data.maxVelocityLimit * this.data.rescaleFactor);
		};

		Stepper.prototype.getMinVelocityLimit = function () {

			return (this.data.minVelocityLimit * this.data.rescaleFactor);
		};

		Stepper.prototype.addPositionOffset = function (positionOffset) {

			this.data.positionOffset += (positionOffset / this.data.rescaleFactor);
		};

		Stepper.prototype.handleStoppedEvent = function (bp) {

			this.data.isMoving = false;
			this.onStopped();
		};

		Stepper.prototype.handlePositionChangeEvent = function (bp) {

			this.data.position = bp.get("0");

			this.onPositionChange((this.data.position + this.data.positionOffset) * this.data.rescaleFactor);
		};

		Stepper.prototype.handleVelocityChangeEvent = function (bp) {

			this.data.velocity = bp.get("0");

			this.onVelocityChange(this.data.velocity * this.data.rescaleFactor);
		};

		self.Stepper = Stepper;

		var TemperatureSensorBase = function TemperatureSensorBase() {
			Phidget.apply(this, arguments);
			this.name = "TemperatureSensor";
			this.class = 28;

			this.onTemperatureChange = function (temperature) { };
			this.onError = function (code, desc) { };
		};
		TemperatureSensorBase.prototype = Object.create(Phidget.prototype);
		TemperatureSensorBase.prototype.constructor = TemperatureSensorBase;

		TemperatureSensorBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		TemperatureSensorBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		TemperatureSensorBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 0 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
				case 0x5f: // BP_TEMPERATURECHANGE
					this.handleTemperatureChangeEvent(bp);
					break;
			}
			return (true);
		};

		TemperatureSensorBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0x36: // BP_SETDATAINTERVAL
					this.data.dataInterval = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('DataInterval');
					return (true);
				case 0x4c: // BP_SETRTDTYPE
					this.data.RTDType = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('RTDType');
					return (true);
				case 0x4d: // BP_SETRTDWIRESETUP
					this.data.RTDWireSetup = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('RTDWireSetup');
					return (true);
				case 0x2e: // BP_SETCHANGETRIGGER
					this.data.temperatureChangeTrigger = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('TemperatureChangeTrigger');
					return (true);
				case 0x54: // BP_SETTHERMOCOUPLETYPE
					this.data.thermocoupleType = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('ThermocoupleType');
					return (true);
			}
		}

		TemperatureSensorBase.prototype.getDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.dataInterval);
		};

		TemperatureSensorBase.prototype.setDataInterval = function (dataInterval) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "u", value: dataInterval });
			var self = this;
			return (bp.send(this.channel, "BP_SETDATAINTERVAL").then(function (res) {
				self.data.dataInterval = dataInterval;
			}));
		};

		TemperatureSensorBase.prototype.getMinDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minDataInterval);
		};

		TemperatureSensorBase.prototype.getMaxDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxDataInterval);
		};

		TemperatureSensorBase.prototype.getRTDType = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.RTDType);
		};

		TemperatureSensorBase.prototype.setRTDType = function (RTDType) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: RTDType });
			var self = this;
			return (bp.send(this.channel, "BP_SETRTDTYPE").then(function (res) {
				self.data.RTDType = RTDType;
			}));
		};

		TemperatureSensorBase.prototype.getRTDWireSetup = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.RTDWireSetup);
		};

		TemperatureSensorBase.prototype.setRTDWireSetup = function (RTDWireSetup) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: RTDWireSetup });
			var self = this;
			return (bp.send(this.channel, "BP_SETRTDWIRESETUP").then(function (res) {
				self.data.RTDWireSetup = RTDWireSetup;
			}));
		};

		TemperatureSensorBase.prototype.getTemperature = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.temperature);
		};

		TemperatureSensorBase.prototype.getMinTemperature = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minTemperature);
		};

		TemperatureSensorBase.prototype.getMaxTemperature = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxTemperature);
		};

		TemperatureSensorBase.prototype.getTemperatureChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.temperatureChangeTrigger);
		};

		TemperatureSensorBase.prototype.setTemperatureChangeTrigger = function (temperatureChangeTrigger) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: temperatureChangeTrigger });
			var self = this;
			return (bp.send(this.channel, "BP_SETCHANGETRIGGER").then(function (res) {
				self.data.temperatureChangeTrigger = temperatureChangeTrigger;
			}));
		};

		TemperatureSensorBase.prototype.getMinTemperatureChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minTemperatureChangeTrigger);
		};

		TemperatureSensorBase.prototype.getMaxTemperatureChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxTemperatureChangeTrigger);
		};

		TemperatureSensorBase.prototype.getThermocoupleType = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.thermocoupleType);
		};

		TemperatureSensorBase.prototype.setThermocoupleType = function (thermocoupleType) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: thermocoupleType });
			var self = this;
			return (bp.send(this.channel, "BP_SETTHERMOCOUPLETYPE").then(function (res) {
				self.data.thermocoupleType = thermocoupleType;
			}));
		};

		TemperatureSensorBase.prototype.handleTemperatureChangeEvent = function (bp) {

			this.data.temperature = bp.get("0");

			this.onTemperatureChange(this.data.temperature);
		};

		var TemperatureSensor = function TemperatureSensor() {
			TemperatureSensorBase.apply(this, arguments);
		};
		TemperatureSensor.prototype = Object.create(TemperatureSensorBase.prototype);
		TemperatureSensor.prototype.constructor = TemperatureSensor;
		self.TemperatureSensor = TemperatureSensor;

		var VoltageInputBase = function VoltageInputBase() {
			Phidget.apply(this, arguments);
			this.name = "VoltageInput";
			this.class = 29;

			this.onVoltageChange = function (voltage) { };
			this.onSensorChange = function (sensorValue, sensorUnit) { };
			this.onError = function (code, desc) { };
		};
		VoltageInputBase.prototype = Object.create(Phidget.prototype);
		VoltageInputBase.prototype.constructor = VoltageInputBase;

		VoltageInputBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		VoltageInputBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		VoltageInputBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 0 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
				case 0x73: // BP_SENSORCHANGE
					this.handleSensorChangeEvent(bp);
					break;
				case 0x65: // BP_VOLTAGECHANGE
					this.handleVoltageChangeEvent(bp);
					break;
			}
			return (true);
		};

		VoltageInputBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0x36: // BP_SETDATAINTERVAL
					this.data.dataInterval = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('DataInterval');
					return (true);
				case 0x4a: // BP_SETPOWERSUPPLY
					this.data.powerSupply = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('PowerSupply');
					return (true);
				case 0x4f: // BP_SETSENSORTYPE
					this.data.sensorType = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('SensorType');
					return (true);
				case 0x7a: // BP_SETSENSORVALUECHANGETRIGGER
					this.data.sensorValueChangeTrigger = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('SensorValueChangeTrigger');
					return (true);
				case 0x2e: // BP_SETCHANGETRIGGER
					this.data.voltageChangeTrigger = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('VoltageChangeTrigger');
					return (true);
				case 0x57: // BP_SETVOLTAGERANGE
					this.data.voltageRange = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('VoltageRange');
					return (true);
			}
		}

		VoltageInputBase.prototype.getDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.dataInterval);
		};

		VoltageInputBase.prototype.setDataInterval = function (dataInterval) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "u", value: dataInterval });
			var self = this;
			return (bp.send(this.channel, "BP_SETDATAINTERVAL").then(function (res) {
				self.data.dataInterval = dataInterval;
			}));
		};

		VoltageInputBase.prototype.getMinDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minDataInterval);
		};

		VoltageInputBase.prototype.getMaxDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxDataInterval);
		};

		VoltageInputBase.prototype.getPowerSupply = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.powerSupply);
		};

		VoltageInputBase.prototype.setPowerSupply = function (powerSupply) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: powerSupply });
			var self = this;
			return (bp.send(this.channel, "BP_SETPOWERSUPPLY").then(function (res) {
				self.data.powerSupply = powerSupply;
			}));
		};

		VoltageInputBase.prototype.getSensorType = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.sensorType);
		};

		VoltageInputBase.prototype.setSensorType = function (sensorType) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: sensorType });
			var self = this;
			return (bp.send(this.channel, "BP_SETSENSORTYPE").then(function (res) {
				self.data.sensorType = sensorType;
			}));
		};

		VoltageInputBase.prototype.getSensorUnit = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.sensorUnit);
		};

		VoltageInputBase.prototype.getSensorValue = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.sensorValue);
		};

		VoltageInputBase.prototype.getSensorValueChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.sensorValueChangeTrigger);
		};

		VoltageInputBase.prototype.setSensorValueChangeTrigger = function (sensorValueChangeTrigger) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: sensorValueChangeTrigger });
			var self = this;
			return (bp.send(this.channel, "BP_SETSENSORVALUECHANGETRIGGER").then(function (res) {
				self.data.sensorValueChangeTrigger = sensorValueChangeTrigger;
			}));
		};

		VoltageInputBase.prototype.getVoltage = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.voltage);
		};

		VoltageInputBase.prototype.getMinVoltage = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minVoltage);
		};

		VoltageInputBase.prototype.getMaxVoltage = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxVoltage);
		};

		VoltageInputBase.prototype.getVoltageChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.voltageChangeTrigger);
		};

		VoltageInputBase.prototype.setVoltageChangeTrigger = function (voltageChangeTrigger) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: voltageChangeTrigger });
			var self = this;
			return (bp.send(this.channel, "BP_SETCHANGETRIGGER").then(function (res) {
				self.data.voltageChangeTrigger = voltageChangeTrigger;
			}));
		};

		VoltageInputBase.prototype.getMinVoltageChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minVoltageChangeTrigger);
		};

		VoltageInputBase.prototype.getMaxVoltageChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxVoltageChangeTrigger);
		};

		VoltageInputBase.prototype.getVoltageRange = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.voltageRange);
		};

		VoltageInputBase.prototype.setVoltageRange = function (voltageRange) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: voltageRange });
			var self = this;
			return (bp.send(this.channel, "BP_SETVOLTAGERANGE").then(function (res) {
				self.data.voltageRange = voltageRange;
			}));
		};

		VoltageInputBase.prototype.handleSensorChangeEvent = function (bp) {

			this.data.sensorValue = bp.get("0");
			var sensorUnit = {
				unit: bp.get("UnitInfo.unit"),
				name: bp.get("UnitInfo.name"),
				symbol: bp.get("UnitInfo.symbol"),
			};
			this.data.sensorUnit = sensorUnit;

			this.onSensorChange(this.data.sensorValue, this.data.sensorUnit);
		};

		VoltageInputBase.prototype.handleVoltageChangeEvent = function (bp) {

			this.data.voltage = bp.get("0");

			this.onVoltageChange(this.data.voltage);
		};

		var VoltageInput = function VoltageInput() {
			VoltageInputBase.apply(this, arguments);
		};
		VoltageInput.prototype = Object.create(VoltageInputBase.prototype);
		VoltageInput.prototype.constructor = VoltageInput;
		self.VoltageInput = VoltageInput;

		var VoltageOutputBase = function VoltageOutputBase() {
			Phidget.apply(this, arguments);
			this.name = "VoltageOutput";
			this.class = 30;

			this.onError = function (code, desc) { };
		};
		VoltageOutputBase.prototype = Object.create(Phidget.prototype);
		VoltageOutputBase.prototype.constructor = VoltageOutputBase;

		VoltageOutputBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		VoltageOutputBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		VoltageOutputBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 0 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
			}
			return (true);
		};

		VoltageOutputBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0x38: // BP_SETENABLED
					this.data.enabled = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('Enabled');
					return (true);
				case 0x56: // BP_SETVOLTAGE
					this.data.voltage = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('Voltage');
					return (true);
				case 0x57: // BP_SETVOLTAGERANGE
					this.data.voltageOutputRange = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('VoltageOutputRange');
					return (true);
			}
		}

		VoltageOutputBase.prototype.setEnabled = function (enabled) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: enabled });
			var self = this;
			return (bp.send(this.channel, "BP_SETENABLED").then(function (res) {
				self.data.enabled = enabled;
			}));
		};

		VoltageOutputBase.prototype.getEnabled = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (!!this.data.enabled);
		};

		VoltageOutputBase.prototype.getVoltage = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.voltage);
		};

		VoltageOutputBase.prototype.setVoltage = function (voltage) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: voltage });
			var self = this;
			return (bp.send(this.channel, "BP_SETVOLTAGE").then(function (res) {
				self.data.voltage = voltage;
			}));
		};

		VoltageOutputBase.prototype.getMinVoltage = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minVoltage);
		};

		VoltageOutputBase.prototype.getMaxVoltage = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxVoltage);
		};

		VoltageOutputBase.prototype.getVoltageOutputRange = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.voltageOutputRange);
		};

		VoltageOutputBase.prototype.setVoltageOutputRange = function (voltageOutputRange) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: voltageOutputRange });
			var self = this;
			return (bp.send(this.channel, "BP_SETVOLTAGERANGE").then(function (res) {
				self.data.voltageOutputRange = voltageOutputRange;
			}));
		};

		var VoltageOutput = function VoltageOutput() {
			VoltageOutputBase.apply(this, arguments);
		};
		VoltageOutput.prototype = Object.create(VoltageOutputBase.prototype);
		VoltageOutput.prototype.constructor = VoltageOutput;

		VoltageOutputBase.prototype.setVoltageOutputRangeSuccess = function (voltageOutputRange) {

			switch (parseInt(voltageOutputRange)) {
				case VoltageOutputRange.VOLTAGE_OUTPUT_RANGE_10V:
					this.data.minVoltage = -10;
					this.data.maxVoltage = 10;
					break;
				case VoltageOutputRange.VOLTAGE_OUTPUT_RANGE_5V:
					this.data.minVoltage = 0;
					this.data.maxVoltage = 5;
					break;
			}
		};

		self.VoltageOutput = VoltageOutput;
		var VoltageRatioInputBase = function VoltageRatioInputBase() {
			Phidget.apply(this, arguments);
			this.name = "VoltageRatioInput";
			this.class = 31;

			this.onVoltageRatioChange = function (voltageRatio) { };
			this.onSensorChange = function (sensorValue, sensorUnit) { };
			this.onError = function (code, desc) { };
		};
		VoltageRatioInputBase.prototype = Object.create(Phidget.prototype);
		VoltageRatioInputBase.prototype.constructor = VoltageRatioInputBase;

		VoltageRatioInputBase.prototype.handleErrorEvent = function (bp) {

			this.onError(bp.entries[0].v, bp.entries[1].v);
		};

		VoltageRatioInputBase.prototype.bridgeInput = function (bp) {
			var res;

			if (this.handleUnsupportedBridgePacket) {
				res = this.handleUnsupportedBridgePacket(bp);
				if (res === true)
					return;
			}

			res = this._event(bp);
			if (res === true)
				return;

			res = this._bridgeInput(bp);
			if (res === true)
				return;

			throw (new Error("unsupported bridge packet: 0x" + bp.vpkt.toString(16)));
		}

		VoltageRatioInputBase.prototype._event = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0:
					this.handleSetStatus(bp, 0 /* version */);
					break;
				case 0x11: // ERROREVENT
					this.handleErrorEvent(bp);
					break;
				case 0x73: // BP_SENSORCHANGE
					this.handleSensorChangeEvent(bp);
					break;
				case 0x66: // BP_VOLTAGERATIOCHANGE
					this.handleVoltageRatioChangeEvent(bp);
					break;
			}
			return (true);
		};

		VoltageRatioInputBase.prototype._bridgeInput = function (bp) {

			switch (bp.vpkt) {
				default:
					return (false);
				case 0x38: // BP_SETENABLED
					this.data.bridgeEnabled = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('BridgeEnabled');
					return (true);
				case 0x2d: // BP_SETBRIDGEGAIN
					this.data.bridgeGain = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('BridgeGain');
					return (true);
				case 0x36: // BP_SETDATAINTERVAL
					this.data.dataInterval = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('DataInterval');
					return (true);
				case 0x4f: // BP_SETSENSORTYPE
					this.data.sensorType = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('SensorType');
					return (true);
				case 0x7a: // BP_SETSENSORVALUECHANGETRIGGER
					this.data.sensorValueChangeTrigger = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('SensorValueChangeTrigger');
					return (true);
				case 0x2e: // BP_SETCHANGETRIGGER
					this.data.voltageRatioChangeTrigger = + bp.entries[0].v;
					if (this.onPropertyChange)
						this.onPropertyChange('VoltageRatioChangeTrigger');
					return (true);
			}
		}

		VoltageRatioInputBase.prototype.getBridgeEnabled = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (!!this.data.bridgeEnabled);
		};

		VoltageRatioInputBase.prototype.setBridgeEnabled = function (bridgeEnabled) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: bridgeEnabled });
			var self = this;
			return (bp.send(this.channel, "BP_SETENABLED").then(function (res) {
				self.data.bridgeEnabled = bridgeEnabled;
			}));
		};

		VoltageRatioInputBase.prototype.getBridgeGain = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.bridgeGain);
		};

		VoltageRatioInputBase.prototype.setBridgeGain = function (bridgeGain) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: bridgeGain });
			var self = this;
			return (bp.send(this.channel, "BP_SETBRIDGEGAIN").then(function (res) {
				self.data.bridgeGain = bridgeGain;
			}));
		};

		VoltageRatioInputBase.prototype.getDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.dataInterval);
		};

		VoltageRatioInputBase.prototype.setDataInterval = function (dataInterval) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "u", value: dataInterval });
			var self = this;
			return (bp.send(this.channel, "BP_SETDATAINTERVAL").then(function (res) {
				self.data.dataInterval = dataInterval;
			}));
		};

		VoltageRatioInputBase.prototype.getMinDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minDataInterval);
		};

		VoltageRatioInputBase.prototype.getMaxDataInterval = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxDataInterval);
		};

		VoltageRatioInputBase.prototype.getSensorType = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.sensorType);
		};

		VoltageRatioInputBase.prototype.setSensorType = function (sensorType) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "d", value: sensorType });
			var self = this;
			return (bp.send(this.channel, "BP_SETSENSORTYPE").then(function (res) {
				self.data.sensorType = sensorType;
			}));
		};

		VoltageRatioInputBase.prototype.getSensorUnit = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.sensorUnit);
		};

		VoltageRatioInputBase.prototype.getSensorValue = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.sensorValue);
		};

		VoltageRatioInputBase.prototype.getSensorValueChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.sensorValueChangeTrigger);
		};

		VoltageRatioInputBase.prototype.setSensorValueChangeTrigger = function (sensorValueChangeTrigger) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: sensorValueChangeTrigger });
			var self = this;
			return (bp.send(this.channel, "BP_SETSENSORVALUECHANGETRIGGER").then(function (res) {
				self.data.sensorValueChangeTrigger = sensorValueChangeTrigger;
			}));
		};

		VoltageRatioInputBase.prototype.getVoltageRatio = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.voltageRatio);
		};

		VoltageRatioInputBase.prototype.getMinVoltageRatio = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minVoltageRatio);
		};

		VoltageRatioInputBase.prototype.getMaxVoltageRatio = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxVoltageRatio);
		};

		VoltageRatioInputBase.prototype.getVoltageRatioChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.voltageRatioChangeTrigger);
		};

		VoltageRatioInputBase.prototype.setVoltageRatioChangeTrigger = function (voltageRatioChangeTrigger) {

			if (this.isopen !== true)
				return (Promise.reject(new Error("not attached")));

			var bp = new BridgePacket(this.channel.conn);
			bp.set({ name: "0", type: "g", value: voltageRatioChangeTrigger });
			var self = this;
			return (bp.send(this.channel, "BP_SETCHANGETRIGGER").then(function (res) {
				self.data.voltageRatioChangeTrigger = voltageRatioChangeTrigger;
			}));
		};

		VoltageRatioInputBase.prototype.getMinVoltageRatioChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.minVoltageRatioChangeTrigger);
		};

		VoltageRatioInputBase.prototype.getMaxVoltageRatioChangeTrigger = function () {

			if (this.isopen !== true)
				throw (new Error("not attached"));

			return (this.data.maxVoltageRatioChangeTrigger);
		};

		VoltageRatioInputBase.prototype.handleSensorChangeEvent = function (bp) {

			this.data.sensorValue = bp.get("0");
			var sensorUnit = {
				unit: bp.get("UnitInfo.unit"),
				name: bp.get("UnitInfo.name"),
				symbol: bp.get("UnitInfo.symbol"),
			};
			this.data.sensorUnit = sensorUnit;

			this.onSensorChange(this.data.sensorValue, this.data.sensorUnit);
		};

		VoltageRatioInputBase.prototype.handleVoltageRatioChangeEvent = function (bp) {

			this.data.voltageRatio = bp.get("0");

			this.onVoltageRatioChange(this.data.voltageRatio);
		};

		var VoltageRatioInput = function VoltageRatioInput() {
			VoltageRatioInputBase.apply(this, arguments);
		};
		VoltageRatioInput.prototype = Object.create(VoltageRatioInputBase.prototype);
		VoltageRatioInput.prototype.constructor = VoltageRatioInput;

		VoltageRatioInput.prototype.handleUnsupportedBridgePacket = function (bp) {
			switch (bp.vpkt) {
				case PhidgetBase.prototype.BP_DATAINTERVALCHANGE:
					this.data.dataInterval = bp.get("0");
					break;
				case PhidgetBase.prototype.BP_MINDATAINTERVALCHANGE:
					this.data.minDataInterval = bp.get("0");
					break;
				default:
					return (false);
			}
			return (true);
		}

		self.VoltageRatioInput = VoltageRatioInput;

		self.EncoderIOMode = {
			ENCODER_IO_MODE_PUSH_PULL: 1,
			ENCODER_IO_MODE_LINE_DRIVER_2K2: 2,
			ENCODER_IO_MODE_LINE_DRIVER_10K: 3,
			ENCODER_IO_MODE_OPEN_COLLECTOR_2K2: 4,
			ENCODER_IO_MODE_OPEN_COLLECTOR_10K: 5,
		};
		self.PhidgetReturnCode = {
			EPHIDGET_OK: 0,
			EPHIDGET_PERM: 1,
			EPHIDGET_NOENT: 2,
			EPHIDGET_TIMEOUT: 3,
			EPHIDGET_KEEPALIVE: 58,
			EPHIDGET_INTERRUPTED: 4,
			EPHIDGET_IO: 5,
			EPHIDGET_NOMEMORY: 6,
			EPHIDGET_ACCESS: 7,
			EPHIDGET_FAULT: 8,
			EPHIDGET_BUSY: 9,
			EPHIDGET_EXIST: 10,
			EPHIDGET_NOTDIR: 11,
			EPHIDGET_ISDIR: 12,
			EPHIDGET_INVALID: 13,
			EPHIDGET_NFILE: 14,
			EPHIDGET_MFILE: 15,
			EPHIDGET_NOSPC: 16,
			EPHIDGET_FBIG: 17,
			EPHIDGET_ROFS: 18,
			EPHIDGET_RO: 19,
			EPHIDGET_UNSUPPORTED: 20,
			EPHIDGET_INVALIDARG: 21,
			EPHIDGET_AGAIN: 22,
			EPHIDGET_EOF: 31,
			EPHIDGET_UNEXPECTED: 28,
			EPHIDGET_DUPLICATE: 27,
			EPHIDGET_BADPASSWORD: 37,
			EPHIDGET_NETUNAVAIL: 45,
			EPHIDGET_CONNREF: 35,
			EPHIDGET_CONNRESET: 46,
			EPHIDGET_HOSTUNREACH: 48,
			EPHIDGET_NODEV: 40,
			EPHIDGET_WRONGDEVICE: 50,
			EPHIDGET_PIPE: 41,
			EPHIDGET_RESOLV: 44,
			EPHIDGET_UNKNOWNVAL: 51,
			EPHIDGET_NOTATTACHED: 52,
			EPHIDGET_INVALIDPACKET: 53,
			EPHIDGET_2BIG: 54,
			EPHIDGET_BADVERSION: 55,
			EPHIDGET_CLOSED: 56,
			EPHIDGET_NOTCONFIGURED: 57,
		};
		self.ErrorEventCode = {
			EEPHIDGET_BADVERSION: 1,
			EEPHIDGET_BUSY: 2,
			EEPHIDGET_NETWORK: 3,
			EEPHIDGET_DISPATCH: 4,
			EEPHIDGET_OK: 4096,
			EEPHIDGET_OVERRUN: 4098,
			EEPHIDGET_PACKETLOST: 4099,
			EEPHIDGET_WRAP: 4100,
			EEPHIDGET_OVERTEMP: 4101,
			EEPHIDGET_OVERCURRENT: 4102,
			EEPHIDGET_OUTOFRANGE: 4103,
			EEPHIDGET_BADPOWER: 4104,
			EEPHIDGET_SATURATION: 4105,
			EEPHIDGET_OVERVOLTAGE: 4107,
			EEPHIDGET_FAILSAFE: 4108,
			EEPHIDGET_VOLTAGEERROR: 4109,
			EEPHIDGET_ENERGYDUMP: 4110,
			EEPHIDGET_MOTORSTALL: 4111,
		};
		self.DeviceID = {
			PHIDID_NOTHING: 0,
			PHIDID_INTERFACEKIT_4_8_8: 1,
			PHIDID_1000: 2,
			PHIDID_1001: 3,
			PHIDID_1002: 4,
			PHIDID_1008: 5,
			PHIDID_1010_1013_1018_1019: 6,
			PHIDID_1011: 7,
			PHIDID_1012: 8,
			PHIDID_1014: 9,
			PHIDID_1015: 10,
			PHIDID_1016: 11,
			PHIDID_1017: 12,
			PHIDID_1023: 13,
			PHIDID_1024: 14,
			PHIDID_1030: 15,
			PHIDID_1031: 16,
			PHIDID_1032: 17,
			PHIDID_1040: 18,
			PHIDID_1041: 19,
			PHIDID_1042: 20,
			PHIDID_1043: 21,
			PHIDID_1044: 22,
			PHIDID_1045: 23,
			PHIDID_1046: 24,
			PHIDID_1047: 25,
			PHIDID_1048: 26,
			PHIDID_1049: 27,
			PHIDID_1051: 28,
			PHIDID_1052: 29,
			PHIDID_1053: 30,
			PHIDID_1054: 31,
			PHIDID_1055: 32,
			PHIDID_1056: 33,
			PHIDID_1057: 34,
			PHIDID_1058: 35,
			PHIDID_1059: 36,
			PHIDID_1060: 37,
			PHIDID_1061: 38,
			PHIDID_1062: 39,
			PHIDID_1063: 40,
			PHIDID_1064: 41,
			PHIDID_1065: 42,
			PHIDID_1066: 43,
			PHIDID_1067: 44,
			PHIDID_1202_1203: 45,
			PHIDID_1204: 46,
			PHIDID_1215__1218: 47,
			PHIDID_1219__1222: 48,
			PHIDID_ADP1000: 49,
			PHIDID_ADP1001: 50,
			PHIDID_DAQ1000: 51,
			PHIDID_DAQ1200: 52,
			PHIDID_DAQ1300: 53,
			PHIDID_DAQ1301: 54,
			PHIDID_DAQ1400: 55,
			PHIDID_DAQ1500: 56,
			PHIDID_DCC1000: 57,
			PHIDID_DST1000: 58,
			PHIDID_DST1200: 59,
			PHIDID_ENC1000: 60,
			PHIDID_HIN1000: 61,
			PHIDID_HIN1001: 62,
			PHIDID_HIN1100: 63,
			PHIDID_HUB0000: 64,
			PHIDID_HUB0001: 65,
			PHIDID_HUB0002: 66,
			PHIDID_HUB0004: 67,
			PHIDID_HUB0005: 68,
			PHIDID_HUM1000: 69,
			PHIDID_LCD1100: 70,
			PHIDID_LED1000: 71,
			PHIDID_LUX1000: 72,
			PHIDID_MOT1100: 73,
			PHIDID_MOT1101: 74,
			PHIDID_OUT1000: 75,
			PHIDID_OUT1001: 76,
			PHIDID_OUT1002: 77,
			PHIDID_OUT1100: 78,
			PHIDID_PRE1000: 79,
			PHIDID_RCC1000: 80,
			PHIDID_REL1000: 81,
			PHIDID_REL1100: 82,
			PHIDID_REL1101: 83,
			PHIDID_SAF1000: 84,
			PHIDID_SND1000: 85,
			PHIDID_STC1000: 86,
			PHIDID_TMP1000: 87,
			PHIDID_TMP1100: 88,
			PHIDID_TMP1101: 89,
			PHIDID_TMP1200: 90,
			PHIDID_TMP1300: 91,
			PHIDID_VCP1000: 92,
			PHIDID_VCP1001: 93,
			PHIDID_VCP1002: 94,
			PHIDID_DIGITALINPUT_PORT: 95,
			PHIDID_DIGITALOUTPUT_PORT: 96,
			PHIDID_VOLTAGEINPUT_PORT: 97,
			PHIDID_VOLTAGERATIOINPUT_PORT: 98,
			PHIDID_GENERICUSB: 99,
			PHIDID_GENERICVINT: 100,
			PHIDID_FIRMWARE_UPGRADE_USB: 101,
			PHIDID_FIRMWARE_UPGRADE_STM32F0: 102,
			PHIDID_FIRMWARE_UPGRADE_STM8S: 103,
			PHIDID_FIRMWARE_UPGRADE_SPI: 104,
			PHIDID_VCP1100: 105,
			PHIDID_VINTSERVO_S2313M: 106,
			PHIDID_DCC1100: 108,
			PHIDID_HIN1101: 109,
			PHIDID_DCC1001: 110,
			PHIDID_DICTIONARY: 111,
			PHIDID_VINTSERVO_S3317M: 112,
			PHIDID_VINTSERVO_S4309M: 113,
			PHIDID_VINTSERVO_S4309R: 114,
			PHIDID_STC1001: 115,
			PHIDID_USBSWITCH: 116,
		};
		self.LogLevel = {
			PHIDGET_LOG_CRITICAL: 1,
			PHIDGET_LOG_ERROR: 2,
			PHIDGET_LOG_WARNING: 3,
			PHIDGET_LOG_INFO: 4,
			PHIDGET_LOG_DEBUG: 5,
			PHIDGET_LOG_VERBOSE: 6,
		};
		self.DeviceClass = {
			PHIDCLASS_NOTHING: 0,
			PHIDCLASS_ACCELEROMETER: 1,
			PHIDCLASS_ADVANCEDSERVO: 2,
			PHIDCLASS_ANALOG: 3,
			PHIDCLASS_BRIDGE: 4,
			PHIDCLASS_ENCODER: 5,
			PHIDCLASS_FREQUENCYCOUNTER: 6,
			PHIDCLASS_GPS: 7,
			PHIDCLASS_HUB: 8,
			PHIDCLASS_INTERFACEKIT: 9,
			PHIDCLASS_IR: 10,
			PHIDCLASS_LED: 11,
			PHIDCLASS_MESHDONGLE: 12,
			PHIDCLASS_MOTORCONTROL: 13,
			PHIDCLASS_PHSENSOR: 14,
			PHIDCLASS_RFID: 15,
			PHIDCLASS_SERVO: 16,
			PHIDCLASS_SPATIAL: 17,
			PHIDCLASS_STEPPER: 18,
			PHIDCLASS_TEMPERATURESENSOR: 19,
			PHIDCLASS_TEXTLCD: 20,
			PHIDCLASS_VINT: 21,
			PHIDCLASS_GENERIC: 22,
			PHIDCLASS_FIRMWAREUPGRADE: 23,
			PHIDCLASS_DICTIONARY: 24,
		};
		self.ChannelClass = {
			PHIDCHCLASS_NOTHING: 0,
			PHIDCHCLASS_ACCELEROMETER: 1,
			PHIDCHCLASS_CURRENTINPUT: 2,
			PHIDCHCLASS_DATAADAPTER: 3,
			PHIDCHCLASS_DCMOTOR: 4,
			PHIDCHCLASS_DIGITALINPUT: 5,
			PHIDCHCLASS_DIGITALOUTPUT: 6,
			PHIDCHCLASS_DISTANCESENSOR: 7,
			PHIDCHCLASS_ENCODER: 8,
			PHIDCHCLASS_FREQUENCYCOUNTER: 9,
			PHIDCHCLASS_GPS: 10,
			PHIDCHCLASS_LCD: 11,
			PHIDCHCLASS_GYROSCOPE: 12,
			PHIDCHCLASS_HUB: 13,
			PHIDCHCLASS_CAPACITIVETOUCH: 14,
			PHIDCHCLASS_HUMIDITYSENSOR: 15,
			PHIDCHCLASS_IR: 16,
			PHIDCHCLASS_LIGHTSENSOR: 17,
			PHIDCHCLASS_MAGNETOMETER: 18,
			PHIDCHCLASS_MESHDONGLE: 19,
			PHIDCHCLASS_PHSENSOR: 37,
			PHIDCHCLASS_POWERGUARD: 20,
			PHIDCHCLASS_PRESSURESENSOR: 21,
			PHIDCHCLASS_RCSERVO: 22,
			PHIDCHCLASS_RESISTANCEINPUT: 23,
			PHIDCHCLASS_RFID: 24,
			PHIDCHCLASS_SOUNDSENSOR: 25,
			PHIDCHCLASS_SPATIAL: 26,
			PHIDCHCLASS_STEPPER: 27,
			PHIDCHCLASS_TEMPERATURESENSOR: 28,
			PHIDCHCLASS_VOLTAGEINPUT: 29,
			PHIDCHCLASS_VOLTAGEOUTPUT: 30,
			PHIDCHCLASS_VOLTAGERATIOINPUT: 31,
			PHIDCHCLASS_FIRMWAREUPGRADE: 32,
			PHIDCHCLASS_GENERIC: 33,
			PHIDCHCLASS_MOTORPOSITIONCONTROLLER: 34,
			PHIDCHCLASS_BLDCMOTOR: 35,
			PHIDCHCLASS_DICTIONARY: 36,
		};
		self.ChannelSubclass = {
			PHIDCHSUBCLASS_NONE: 1,
			PHIDCHSUBCLASS_DIGITALOUTPUT_DUTY_CYCLE: 16,
			PHIDCHSUBCLASS_DIGITALOUTPUT_LED_DRIVER: 17,
			PHIDCHSUBCLASS_TEMPERATURESENSOR_RTD: 32,
			PHIDCHSUBCLASS_TEMPERATURESENSOR_THERMOCOUPLE: 33,
			PHIDCHSUBCLASS_VOLTAGEINPUT_SENSOR_PORT: 48,
			PHIDCHSUBCLASS_VOLTAGERATIOINPUT_SENSOR_PORT: 64,
			PHIDCHSUBCLASS_VOLTAGERATIOINPUT_BRIDGE: 65,
			PHIDCHSUBCLASS_LCD_GRAPHIC: 80,
			PHIDCHSUBCLASS_LCD_TEXT: 81,
			PHIDCHSUBCLASS_ENCODER_MODE_SETTABLE: 96,
			PHIDCHSUBCLASS_RCSERVO_EMBEDDED: 112,
		};
		self.MeshMode = {
			MESHMODE_ROUTER: 1,
			MESHMODE_SLEEPYENDDEVICE: 2,
		};
		self.PowerSupply = {
			POWER_SUPPLY_OFF: 1,
			POWER_SUPPLY_12V: 2,
			POWER_SUPPLY_24V: 3,
		};
		self.RTDWireSetup = {
			RTD_WIRE_SETUP_2WIRE: 1,
			RTD_WIRE_SETUP_3WIRE: 2,
			RTD_WIRE_SETUP_4WIRE: 3,
		};
		self.InputMode = {
			INPUT_MODE_NPN: 1,
			INPUT_MODE_PNP: 2,
		};
		self.FanMode = {
			FAN_MODE_OFF: 1,
			FAN_MODE_ON: 2,
			FAN_MODE_AUTO: 3,
		};
		self.Unit = {
			PHIDUNIT_NONE: 0,
			PHIDUNIT_BOOLEAN: 1,
			PHIDUNIT_PERCENT: 2,
			PHIDUNIT_DECIBEL: 3,
			PHIDUNIT_MILLIMETER: 4,
			PHIDUNIT_CENTIMETER: 5,
			PHIDUNIT_METER: 6,
			PHIDUNIT_GRAM: 7,
			PHIDUNIT_KILOGRAM: 8,
			PHIDUNIT_MILLIAMPERE: 9,
			PHIDUNIT_AMPERE: 10,
			PHIDUNIT_KILOPASCAL: 11,
			PHIDUNIT_VOLT: 12,
			PHIDUNIT_DEGREE_CELCIUS: 13,
			PHIDUNIT_LUX: 14,
			PHIDUNIT_GAUSS: 15,
			PHIDUNIT_PH: 16,
			PHIDUNIT_WATT: 17,
		};
		self.LEDForwardVoltage = {
			LED_FORWARD_VOLTAGE_1_7V: 1,
			LED_FORWARD_VOLTAGE_2_75V: 2,
			LED_FORWARD_VOLTAGE_3_2V: 3,
			LED_FORWARD_VOLTAGE_3_9V: 4,
			LED_FORWARD_VOLTAGE_4_0V: 5,
			LED_FORWARD_VOLTAGE_4_8V: 6,
			LED_FORWARD_VOLTAGE_5_0V: 7,
			LED_FORWARD_VOLTAGE_5_6V: 8,
		};
		self.FilterType = {
			FILTER_TYPE_ZERO_CROSSING: 1,
			FILTER_TYPE_LOGIC_LEVEL: 2,
		};
		self.PortMode = {
			PORT_MODE_VINT_PORT: 0,
			PORT_MODE_DIGITAL_INPUT: 1,
			PORT_MODE_DIGITAL_OUTPUT: 2,
			PORT_MODE_VOLTAGE_INPUT: 3,
			PORT_MODE_VOLTAGE_RATIO_INPUT: 4,
		};
		self.Encoding = {
			IR_ENCODING_UNKNOWN: 1,
			IR_ENCODING_SPACE: 2,
			IR_ENCODING_PULSE: 3,
			IR_ENCODING_BIPHASE: 4,
			IR_ENCODING_RC5: 5,
			IR_ENCODING_RC6: 6,
		};
		self.Length = {
			IR_LENGTH_UNKNOWN: 1,
			IR_LENGTH_CONSTANT: 2,
			IR_LENGTH_VARIABLE: 3,
		};
		self.LCDFont = {
			FONT_User1: 1,
			FONT_User2: 2,
			FONT_6x10: 3,
			FONT_5x8: 4,
			FONT_6x12: 5,
		};
		self.LCDScreenSize = {
			SCREEN_SIZE_NONE: 1,
			SCREEN_SIZE_1x8: 2,
			SCREEN_SIZE_2x8: 3,
			SCREEN_SIZE_1x16: 4,
			SCREEN_SIZE_2x16: 5,
			SCREEN_SIZE_4x16: 6,
			SCREEN_SIZE_2x20: 7,
			SCREEN_SIZE_4x20: 8,
			SCREEN_SIZE_2x24: 9,
			SCREEN_SIZE_1x40: 10,
			SCREEN_SIZE_2x40: 11,
			SCREEN_SIZE_4x40: 12,
			SCREEN_SIZE_64x128: 13,
		};
		self.LCDPixelState = {
			PIXEL_STATE_OFF: 0,
			PIXEL_STATE_ON: 1,
			PIXEL_STATE_INVERT: 2,
		};
		self.PhidgetServerType = {
			PHIDGETSERVER_NONE: 0,
			PHIDGETSERVER_DEVICELISTENER: 1,
			PHIDGETSERVER_DEVICE: 2,
			PHIDGETSERVER_DEVICEREMOTE: 3,
			PHIDGETSERVER_WWWLISTENER: 4,
			PHIDGETSERVER_WWW: 5,
			PHIDGETSERVER_WWWREMOTE: 6,
			PHIDGETSERVER_SBC: 7,
		};
		self.RCServoVoltage = {
			RCSERVO_VOLTAGE_5V: 1,
			RCSERVO_VOLTAGE_6V: 2,
			RCSERVO_VOLTAGE_7_4V: 3,
		};
		self.RFIDProtocol = {
			PROTOCOL_EM4100: 1,
			PROTOCOL_ISO11785_FDX_B: 2,
			PROTOCOL_PHIDGETS: 3,
		};
		self.SPLRange = {
			SPL_RANGE_102dB: 1,
			SPL_RANGE_82dB: 2,
		};
		self.ControlMode = {
			CONTROL_MODE_STEP: 0,
			CONTROL_MODE_RUN: 1,
		};
		self.RTDType = {
			RTD_TYPE_PT100_3850: 1,
			RTD_TYPE_PT1000_3850: 2,
			RTD_TYPE_PT100_3920: 3,
			RTD_TYPE_PT1000_3920: 4,
		};
		self.ThermocoupleType = {
			THERMOCOUPLE_TYPE_J: 1,
			THERMOCOUPLE_TYPE_K: 2,
			THERMOCOUPLE_TYPE_E: 3,
			THERMOCOUPLE_TYPE_T: 4,
		};
		self.VoltageRange = {
			VOLTAGE_RANGE_10mV: 1,
			VOLTAGE_RANGE_40mV: 2,
			VOLTAGE_RANGE_200mV: 3,
			VOLTAGE_RANGE_312_5mV: 4,
			VOLTAGE_RANGE_400mV: 5,
			VOLTAGE_RANGE_1000mV: 6,
			VOLTAGE_RANGE_2V: 7,
			VOLTAGE_RANGE_5V: 8,
			VOLTAGE_RANGE_15V: 9,
			VOLTAGE_RANGE_40V: 10,
			VOLTAGE_RANGE_AUTO: 11,
		};
		self.VoltageSensorType = {
			SENSOR_TYPE_VOLTAGE: 0,
			SENSOR_TYPE_1114: 11140,
			SENSOR_TYPE_1117: 11170,
			SENSOR_TYPE_1123: 11230,
			SENSOR_TYPE_1127: 11270,
			SENSOR_TYPE_1130_PH: 11301,
			SENSOR_TYPE_1130_ORP: 11302,
			SENSOR_TYPE_1132: 11320,
			SENSOR_TYPE_1133: 11330,
			SENSOR_TYPE_1135: 11350,
			SENSOR_TYPE_1142: 11420,
			SENSOR_TYPE_1143: 11430,
			SENSOR_TYPE_3500: 35000,
			SENSOR_TYPE_3501: 35010,
			SENSOR_TYPE_3502: 35020,
			SENSOR_TYPE_3503: 35030,
			SENSOR_TYPE_3507: 35070,
			SENSOR_TYPE_3508: 35080,
			SENSOR_TYPE_3509: 35090,
			SENSOR_TYPE_3510: 35100,
			SENSOR_TYPE_3511: 35110,
			SENSOR_TYPE_3512: 35120,
			SENSOR_TYPE_3513: 35130,
			SENSOR_TYPE_3514: 35140,
			SENSOR_TYPE_3515: 35150,
			SENSOR_TYPE_3516: 35160,
			SENSOR_TYPE_3517: 35170,
			SENSOR_TYPE_3518: 35180,
			SENSOR_TYPE_3519: 35190,
			SENSOR_TYPE_3584: 35840,
			SENSOR_TYPE_3585: 35850,
			SENSOR_TYPE_3586: 35860,
			SENSOR_TYPE_3587: 35870,
			SENSOR_TYPE_3588: 35880,
			SENSOR_TYPE_3589: 35890,
		};
		self.VoltageOutputRange = {
			VOLTAGE_OUTPUT_RANGE_10V: 1,
			VOLTAGE_OUTPUT_RANGE_5V: 2,
		};
		self.BridgeGain = {
			BRIDGE_GAIN_1: 1,
			BRIDGE_GAIN_2: 2,
			BRIDGE_GAIN_4: 3,
			BRIDGE_GAIN_8: 4,
			BRIDGE_GAIN_16: 5,
			BRIDGE_GAIN_32: 6,
			BRIDGE_GAIN_64: 7,
			BRIDGE_GAIN_128: 8,
		};
		self.VoltageRatioSensorType = {
			SENSOR_TYPE_VOLTAGERATIO: 0,
			SENSOR_TYPE_1101_SHARP_2D120X: 11011,
			SENSOR_TYPE_1101_SHARP_2Y0A21: 11012,
			SENSOR_TYPE_1101_SHARP_2Y0A02: 11013,
			SENSOR_TYPE_1102: 11020,
			SENSOR_TYPE_1103: 11030,
			SENSOR_TYPE_1104: 11040,
			SENSOR_TYPE_1105: 11050,
			SENSOR_TYPE_1106: 11060,
			SENSOR_TYPE_1107: 11070,
			SENSOR_TYPE_1108: 11080,
			SENSOR_TYPE_1109: 11090,
			SENSOR_TYPE_1110: 11100,
			SENSOR_TYPE_1111: 11110,
			SENSOR_TYPE_1112: 11120,
			SENSOR_TYPE_1113: 11130,
			SENSOR_TYPE_1115: 11150,
			SENSOR_TYPE_1116: 11160,
			SENSOR_TYPE_1118_AC: 11181,
			SENSOR_TYPE_1118_DC: 11182,
			SENSOR_TYPE_1119_AC: 11191,
			SENSOR_TYPE_1119_DC: 11192,
			SENSOR_TYPE_1120: 11200,
			SENSOR_TYPE_1121: 11210,
			SENSOR_TYPE_1122_AC: 11221,
			SENSOR_TYPE_1122_DC: 11222,
			SENSOR_TYPE_1124: 11240,
			SENSOR_TYPE_1125_HUMIDITY: 11251,
			SENSOR_TYPE_1125_TEMPERATURE: 11252,
			SENSOR_TYPE_1126: 11260,
			SENSOR_TYPE_1128: 11280,
			SENSOR_TYPE_1129: 11290,
			SENSOR_TYPE_1131: 11310,
			SENSOR_TYPE_1134: 11340,
			SENSOR_TYPE_1136: 11360,
			SENSOR_TYPE_1137: 11370,
			SENSOR_TYPE_1138: 11380,
			SENSOR_TYPE_1139: 11390,
			SENSOR_TYPE_1140: 11400,
			SENSOR_TYPE_1141: 11410,
			SENSOR_TYPE_1146: 11460,
			SENSOR_TYPE_3120: 31200,
			SENSOR_TYPE_3121: 31210,
			SENSOR_TYPE_3122: 31220,
			SENSOR_TYPE_3123: 31230,
			SENSOR_TYPE_3130: 31300,
			SENSOR_TYPE_3520: 35200,
			SENSOR_TYPE_3521: 35210,
			SENSOR_TYPE_3522: 35220,
		};
		/* End of jPhidgets */
		return (self);
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = new jPhidgets();
		root.jPhidgets = module.exports;
	} else {
		window.jPhidgets = new jPhidgets();
	}
}).call(this);
