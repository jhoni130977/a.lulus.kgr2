aktif();
//tampil();

function aktif() {
	$('#data-list2').html(`
						    <div class="d-flex justify-content-center">
		<div class="spinner-border text-danger" role="status">
			<span class="sr-only">Loading...</span>
		</div>
	  </div>
						`)
     $.ajax({
        url: 'https://smk-smeatdkosgoro2pdg.sch.id/lulusapi/aktifapi.php',
		//url: 'http://localhost/lulusapi/aktifapi.php',
        type: 'get',
        dataType: 'json',
        success: function(result){
			//console.log(result.status);
            if(result.status == "sukses"){
                let datas = result.data;				
                $.each(datas, function(i, data){
					//console.log(data.aktif);
						if(data.aktif == "AKTIF")
							{
								$('#data-list2').html(`
									<div class="row mt-3 justify-content-center">
										<form id=form-user method=POST>
										<font size=2><b>Jadwal Pemgumuman : </b>&nbsp;
											<select name=aktif>
												<option><font size=2> ` + data.aktif + ` </option>
												<option><font size=2>TIDAK AKTIF</option>
											</select>&nbsp;
											<button id=simpan class='btn btn-success btn-sm'><font size=2>Simpan</button><form>
											<br>						
									</div>
								`) 
							}
						if(data.aktif == "TIDAK AKTIF")
							{
								$('#data-list2').html(`
									<div class="row mt-3 justify-content-center">
										<form id=form-user method=POST>
										<font size=2><b>Jadwal Pemgumuman : </b>&nbsp;
											<select name=aktif>
												<option><font size=2> ` + data.aktif + ` </option>
												<option><font size=2>AKTIF</option>
											</select>&nbsp;
											<button id=simpan class='btn btn-success btn-sm'><font size=2>Simpan</button><form>
											<br>						
									</div>
								`) 
							}
                });

					$(document).ready(function (e) {
					$("#form-user").on('submit',(function(e) {
						e.preventDefault();
						$.ajax({
							url: "https://smk-smeatdkosgoro2pdg.sch.id/lulusapi/editaktif.php",
							//url: "https://localhost/lulusapi/editaktif.php",
							type: "POST",
							data:  new FormData(this),
							contentType: false,
							cache: false,
							processData:false,
							success: function(data)
							{
								 alert("Jadwal aktif berhasil di Update"); 
							//alert(data);
							},
							error: function() 
							{ alert("Data Error..");
							} 	        
					   }); return false;
					   //tampil();
					}));
				});
				

        }
		}
    });
}



function tampil() {
	//var coba = "cobaaa";
//console.log(coba);
$('#data-list').html(` <div class="d-flex justify-content-center">
		<div class="spinner-border text-danger" role="status">
			<span class="sr-only">Loading...</span>
		</div>
	  </div>  `);
$('#data-list1').html(``);
 $.ajax({
        url: 'https://smk-smeatdkosgoro2pdg.sch.id/lulusapi/tampil5.php',
		//url: 'http://localhost/lulusapi/tampil5.php',
        type: 'get',
        dataType: 'json',
			data: {
            'id' : $('#search-input').val()
        },
        success: function(result){
            if(result.status == "sukses1"){
                let datas = result.data;				
                $.each(datas, function(i, data){
					if(data.ket == "LULUS" && data.adm == "LUNAS")
						{
							$('#data-list').html('');
								$('#data-list').append(`
									<form id=form-lulus5 method=POST>
									<div class="row mt-0 justify-content-center">								
										<table border=0 width=100%>									
											<tr><td>No. Ujian </td><td>:<b> ` + data.no + `
											<input type=hidden name=no id=no value= ` + data.no + ` ></td></tr>						
											<tr><td>Nama Siswa </td><td>:<b> ` + data.nama + `</td></tr>
											<tr><td>Sekolah Asal </td><td>:<b> ` + data.sekolah + `</td></tr>
											<tr><td>Status </td><td>:<b>
													<select name=lulus id=lulus>
														<option><font size=2> ` + data.ket + ` </option>
														<option><font size=2>TIDAK LULUS</option>
													</select></td></tr>
											<tr><td>Adm. Keuangan </td><td>:<b>
													<select name=adm id=adm>
														<option><font size=2> ` + data.adm + ` </option>
														<option><font size=2>BELUM LUNAS</option>
													</select></td></tr>
											<tr><td colspan=2><button class='btn btn-primary btn-sm'>Simpan</button></td></tr>
										</table>								
									</div></form>
								`)
						}
					
					if(data.ket == "LULUS" && data.adm == "BELUM LUNAS")
						{
							$('#data-list').html('');
								$('#data-list').append(`
									<form id=form-lulus5 method=POST>
									<div class="row mt-0 justify-content-center">								
										<table border=0 width=100%>									
											<tr><td>No. Ujian </td><td>:<b> ` + data.no + `
											<input type=hidden name=no id=no value= ` + data.no + ` ></td></tr>						
											<tr><td>Nama Siswa </td><td>:<b> ` + data.nama + `</td></tr>
											<tr><td>Sekolah Asal </td><td>:<b> ` + data.sekolah + `</td></tr>
											<tr><td>Status </td><td>:<b>
													<select name=lulus id=lulus>
														<option><font size=2> ` + data.ket + ` </option>
														<option><font size=2>TIDAK LULUS</option>
													</select></td></tr>
											<tr><td>Adm. Keuangan </td><td>:<b>
													<select name=adm id=adm>
														<option><font size=2> ` + data.adm + ` </option>
														<option><font size=2>LUNAS</option>
													</select></td></tr>
											<tr><td colspan=2><button class='btn btn-primary btn-sm'>Simpan</button></td></tr>
										</table>								
									</div></form>
								`)
						}

					if(data.ket == "TIDAK LULUS")
						{
							$('#data-list').html('');
								$('#data-list').append(`
									<form id=form-lulus5 method=POST>
									<div class="row mt-0 justify-content-center">								
										<table border=0 width=100%>									
											<tr><td>No. Ujian </td><td>:<b> ` + data.no + `
											<input type=hidden name=no id=no value= ` + data.no + ` ></td></tr>						
											<tr><td>Nama Siswa </td><td>:<b> ` + data.nama + `</td></tr>
											<tr><td>Sekolah Asal </td><td>:<b> ` + data.sekolah + `</td></tr>
											<tr><td>Status </td><td>:<b>
													<select name=lulus id=lulus>
														<option><font size=2> ` + data.ket + ` </option>
														<option><font size=2>LULUS</option>
													</select></td></tr>
											<tr><td colspan=2><button class='btn btn-primary btn-sm'>Simpan</button></td></tr>
										</table>								
									</div></form>
								`)
						}

					if(data.ket == "TIDAK LULUS" && data.adm == "LUNAS")
						{
							$('#data-list').html('');
								$('#data-list').append(`
									<form id=form-lulus5 method=POST>
									<div class="row mt-0 justify-content-center">								
										<table border=0 width=100%>									
											<tr><td>No. Ujian </td><td>:<b> ` + data.no + `
											<input type=hidden name=no id=no value= ` + data.no + ` ></td></tr>						
											<tr><td>Nama Siswa </td><td>:<b> ` + data.nama + `</td></tr>
											<tr><td>Sekolah Asal </td><td>:<b> ` + data.sekolah + `</td></tr>
											<tr><td>Status </td><td>:<b>
													<select name=lulus id=lulus>
														<option><font size=2> ` + data.ket + ` </option>
														<option><font size=2>LULUS</option>
													</select></td></tr>
											<tr><td>Adm. Keuangan </td><td>:<b>
													<select name=adm id=adm>
														<option><font size=2> ` + data.adm + ` </option>
														<option><font size=2>BELUM LUNAS</option>
													</select></td></tr>
											<tr><td colspan=2><button class='btn btn-primary btn-sm'>Simpan</button></td></tr>
										</table>								
									</div></form>
								`)
						}

					if(data.ket == "TIDAK LULUS" && data.adm == "BELUM LUNAS")
						{
							$('#data-list').html('');
								$('#data-list').append(`
									<form id=form-lulus5 method=POST>
									<div class="row mt-0 justify-content-center">								
										<table border=0 width=100%>									
											<tr><td>No. Ujian </td><td>:<b> ` + data.no + `
											<input type=hidden name=no id=no value= ` + data.no + ` ></td></tr>						
											<tr><td>Nama Siswa </td><td>:<b> ` + data.nama + `</td></tr>
											<tr><td>Sekolah Asal </td><td>:<b> ` + data.sekolah + `</td></tr>
											<tr><td>Status </td><td>:<b>
													<select name=lulus id=lulus>
														<option><font size=2> ` + data.ket + ` </option>
														<option><font size=2>LULUS</option>
													</select></td></tr>
											<tr><td>Adm. Keuangan </td><td>:<b>
													<select name=adm id=adm>
														<option><font size=2> ` + data.adm + ` </option>
														<option><font size=2>LUNAS</option>
													</select></td></tr>
											<tr><td colspan=2><button class='btn btn-primary btn-sm'>Simpan</button></td></tr>
										</table>								
									</div></form>
								`)
						}
                });
					
					lulus();
        }
		if(result.status == "gagal"){ 
			$('#data-list').html(``);
			$('#data-list1').html("<font color=red><b>Data Tidak Ditemukan</b></font>") }
		}
    });
}

	

$('#search-button').on('click', function(){
    tampil();    
});

$('#search-input').on('keyup', function (e){
    if(e.keyCode === 13)
    {
        tampil();
    }
});

function lulus() {

					$(document).ready(function (e) {
					$("#form-lulus5").on('submit',(function(e) {
						spin();
						e.preventDefault();						
						$.ajax({
							url: "https://smk-smeatdkosgoro2pdg.sch.id/lulusapi/editlulus.php",
							//url: "http://localhost/lulusapi/editlulus.php",
							type: "POST",
							data:  new FormData(this),
							contentType: false,
							cache: false,
							processData:false,
							success: function(data)
							{	 
								 alert("Data berhasil di Update"); 
							$('#data-list3').html('');
							},
							error: function() 
							{ alert("Data Error..");
							} 	        
					   }); return false;
					   //tampil();
					}));
				});

			}

	function spin() {
	$('#data-list3').html(`
						    <div class="d-flex justify-content-center">
		<div class="spinner-border text-danger" role="status">
			<span class="sr-only">Loading...</span>
		</div>
	  </div>
						`)
	}
