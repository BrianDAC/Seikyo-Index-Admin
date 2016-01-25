
'use strict';

angular.module('seikyo.admin')

.controller('SeikyoCtrl', function ($scope, $http, $state, API, SeikyoResource, seikyo, Modal, toaster, divisions, $mdDialog) {
	console.log(seikyo)
	$scope.seikyo = seikyo
	$scope.divisions = divisions
	var monthNames = ["January", "February", "March", "April", "May", "June",
	  "July", "August", "September", "October", "November", "December"
	];
	var d = new Date($scope.seikyo.date);
	$scope.seikyo.date = monthNames[d.getMonth()]
    $scope.navigate = $state.go

	for (var i = 0; i < seikyo.experience.length; i++) {
		for (var j = 0; j < divisions.length; j++) {
			if (seikyo.experience[i].division == divisions[j]._id) {
				seikyo.experience[i].division = divisions[j];
				j = divisions.length
			};
		};
	};

	//ADVERTISING
	$scope.addAdvertising = function () {
		$scope.advertising = {}
		Modal.regularForm.render({
		    label: 'Name'
		}).on('accept', function (value) {
			$scope.advertising.name = value
			$scope.advertising.seikyo = $scope.seikyo._id
			SeikyoResource.addAdvertising({seikyo: $scope.seikyo._id}, $scope.advertising, function (advertising) {
				$scope.advertising._id = advertising._id
				seikyo.advertising.push($scope.advertising)
				console.log($scope.seikyo)
				toaster.pop('success', '', 'Advertising Added');
			}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error');
			})
		})
	}
	$scope.deleteAdvertising = function (index, advertising) {
		var index = {
			index: index
		};
		SeikyoResource.deleteAdvertising({seikyo: $scope.seikyo._id, advertising: advertising._id}, index, function () {
			seikyo.advertising.splice(index, 1);
			toaster.pop('warning', '', 'Advertising Removed');
		}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error');
		})
	}
	$scope.updateAdvertising = function (advertising) {
		SeikyoResource.updateAdvertising({seikyo: $scope.seikyo._id, advertising: advertising._id}, advertising, function (advertising) {
		}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error al modificar');
		})
	}

	//ARTICLE
	$scope.addArticle = function () {
		$scope.article = {}
		Modal.regularForm.render({
		    label: 'Name'
		}).on('accept', function (value) {
			$scope.article.name = value
			$scope.article.seikyo = $scope.seikyo._id
			SeikyoResource.addArticle({seikyo: $scope.seikyo._id}, $scope.article, function (article) {
				$scope.article._id = article._id
				seikyo.article.push($scope.article)
				toaster.pop('success', '', 'Article Added');
			}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error');
			})
		})
	}
	$scope.deleteArticle = function (index, article) {
		var index = {
			index: index
		};
		SeikyoResource.deleteArticle({seikyo: $scope.seikyo._id, article: article._id}, index, function () {
			$scope.seikyo.article.splice(index, 1);
			seikyo.article.splice(index, 1);
			toaster.pop('warning', '', 'Article Removed');
		}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error');
		})
	}
	$scope.updateArticle = function (article) {
		SeikyoResource.updateArticle({seikyo: $scope.seikyo._id, article: article._id}, article, function (article) {
		}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error al modificar');
		})
	}

	//BASICTERM
	$scope.addBasicTerm = function () {
		$scope.basicTerm = {}
		Modal.regularForm.render({
		    label: 'Name'
		}).on('accept', function (value) {
			$scope.basicTerm.name = value
			$scope.basicTerm.seikyo = $scope.seikyo._id
			SeikyoResource.addBasicTerm({seikyo: $scope.seikyo._id}, $scope.basicTerm, function (basicTerm) {
				$scope.basicTerm._id = basicTerm._id
				seikyo.basicTerm.push($scope.basicTerm)
				toaster.pop('success', '', 'Basic Term Added');
			}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error');
			})
		})
	}
	$scope.deleteBasicTerm = function (index, basicTerm) {
		var index = {
			index: index
		};
		SeikyoResource.deleteBasicTerm({seikyo: $scope.seikyo._id, basicTerm: basicTerm._id}, index, function () {
			$scope.seikyo.basicTerm.splice(index, 1);
			seikyo.basicTerm.splice(index, 1);
			toaster.pop('warning', '', 'Basic Term Removed');
		}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error');
		})
	}
	$scope.updateBasicTerm = function (basicTerm) {
		SeikyoResource.updateBasicTerm({seikyo: $scope.seikyo._id, basicTerm: basicTerm._id}, basicTerm, function (basicTerm) {
		}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error al modificar');
		})
	}

	//EDITORIAL
	$scope.addEditorial = function () {
		$scope.editorial = {}
		Modal.regularForm.render({
		    label: 'Name'
		}).on('accept', function (value) {
			$scope.editorial.name = value
			$scope.editorial.seikyo = $scope.seikyo._id
			SeikyoResource.addEditorial({seikyo: $scope.seikyo._id}, $scope.editorial, function (editorial) {
				$scope.editorial._id = editorial._id
				seikyo.editorial.push($scope.editorial)
				toaster.pop('success', '', 'Editorial Added');
			}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error');
			})
		})
	}
	$scope.deleteEditorial = function (index, editorial) {
		var index = {
			index: index
		};
		SeikyoResource.deleteEditorial({seikyo: $scope.seikyo._id, editorial: editorial._id}, index, function () {
			$scope.seikyo.editorial.splice(index, 1);
			seikyo.editorial.splice(index, 1);
			toaster.pop('warning', '', 'Editorial Removed');
		}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error');
		})
	}
	$scope.updateEditorial = function (editorial) {editorial
		SeikyoResource.updateEditorial({seikyo: $scope.seikyo._id, editorial: editorial._id}, editorial, function (editorial) {
		}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error al modificar');
		})
	}

	//EXPERIENCE
	$scope.addExperience = function () {
		$scope.experience = {}
		Modal.experienceForm.render({
		    labelName: 'Name',
		    labelOwner: 'Owner',
		    labelDivision: 'Division'
		}).on('accept', function (value) {
			$scope.experience = {}
			$scope.experience.name = value.name
			$scope.experience.owner = value.owner
			$scope.experience.seikyo = $scope.seikyo._id
			for (var i = 0; i < $scope.divisions.length; i++) {
				if (value.division == $scope.divisions[i].name) {
					$scope.indexDivision = i
					$scope.experience.division = $scope.divisions[i]._id
				};
			};
			SeikyoResource.addExperience({seikyo: $scope.seikyo._id}, $scope.experience, function (experience) {
				$scope.experience.division = $scope.divisions[$scope.indexDivision]
				$scope.experience._id = experience._id
				seikyo.experience.push($scope.experience)
				toaster.pop('success', '', 'Experience Added');
			}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error');
			})
		})
	}
	$scope.deleteExperience = function (index, experience) {
		var index = {
			index: index
		};
		SeikyoResource.deleteExperience({seikyo: $scope.seikyo._id, experience: experience._id}, index, function () {
			seikyo.experience.splice(index, 1);
			toaster.pop('warning', '', 'Experience Removed');
		}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error');
		})
	}
	$scope.updateExperience = function (experience) {
		SeikyoResource.updateExperience({seikyo: $scope.seikyo._id, experience: experience._id}, experience, function (experience) {
		}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error al modificar');
		})
	}

	//FEMENINEDIVISION
	$scope.addFemenineDivision = function () {
		$scope.femenineDivision = {}
		Modal.regularForm.render({
		    label: 'Name'
		}).on('accept', function (value) {
			$scope.femenineDivision.name = value
			$scope.femenineDivision.seikyo = $scope.seikyo._id
			SeikyoResource.addFemenineDivision({seikyo: $scope.seikyo._id}, $scope.femenineDivision, function (femenineDivision) {
				$scope.femenineDivision._id = femenineDivision._id
				seikyo.femenineDivision.push($scope.femenineDivision)
				toaster.pop('success', '', 'Femenine Division Added');
			}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error');
			})
		})
	}
	$scope.deleteFemenineDivision = function (index, femenineDivision) {
		var index = {
			index: index
		};
		SeikyoResource.deleteFemenineDivision({seikyo: $scope.seikyo._id, femenineDivision: femenineDivision._id}, index, function () {
			$scope.seikyo.femenineDivision.splice(index, 1);
			seikyo.femenineDivision.splice(index, 1);
			toaster.pop('warning', '', 'FemenineDivision Removed');
		}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error');
		})
	}
	$scope.updateFemenineDivision = function (femenineDivision) {
		SeikyoResource.updateFemenineDivision({seikyo: $scope.seikyo._id, femenineDivision: femenineDivision._id}, femenineDivision, function (femenineDivision) {
		}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error al modificar');
		})
	}

	//FUTUREGROUP
	$scope.addFutureGroup = function () {
		$scope.futureGroup = {}
		Modal.regularForm.render({
		    label: 'Name'
		}).on('accept', function (value) {
			$scope.futureGroup.name = value
			$scope.futureGroup.seikyo = $scope.seikyo._id
			SeikyoResource.addFutureGroup({seikyo: $scope.seikyo._id}, $scope.futureGroup, function (futureGroup) {
				$scope.futureGroup._id = futureGroup._id
				seikyo.futureGroup.push($scope.futureGroup)
				toaster.pop('success', '', 'Future Group Added');
			}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error');
			})
		})
	}
	$scope.deleteFutureGroup = function (index, futureGroup) {
		var index = {
			index: index
		};
		SeikyoResource.deleteFutureGroup({seikyo: $scope.seikyo._id, futureGroup: futureGroup._id}, index, function () {
			$scope.seikyo.futureGroup.splice(index, 1);
			seikyo.futureGroup.splice(index, 1);
			toaster.pop('warning', '', 'FutureGroup Removed');
		}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error');
		})
	}
	$scope.updateFutureGroup = function (futureGroup) {
		SeikyoResource.updateFutureGroup({seikyo: $scope.seikyo._id, futureGroup: futureGroup._id}, futureGroup, function (futureGroup) {
		}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error al modificar');
		})
	}

	//MASCULINEDIVISION
	$scope.addMasculineDivision = function () {
		$scope.masculineDivision = {}
		Modal.regularForm.render({
		    label: 'Name'
		}).on('accept', function (value) {
			$scope.masculineDivision.name = value
			$scope.masculineDivision.seikyo = $scope.seikyo._id
			SeikyoResource.addMasculineDivision({seikyo: $scope.seikyo._id}, $scope.masculineDivision, function (masculineDivision) {
				$scope.masculineDivision._id = masculineDivision._id
				seikyo.masculineDivision.push($scope.masculineDivision)
				toaster.pop('success', '', 'Masculine Division Added');
			}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error');
			})
		})
	}
	$scope.deleteMasculineDivision = function (index, masculineDivision) {
		var index = {
			index: index
		};
		SeikyoResource.deleteMasculineDivision({seikyo: $scope.seikyo._id, masculineDivision: masculineDivision._id}, index, function () {
			$scope.seikyo.masculineDivision.splice(index, 1);
			seikyo.masculineDivision.splice(index, 1);
			toaster.pop('warning', '', 'MasculineDivision Removed');
		}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error');
		})
	}
	$scope.updateMasculineDivision = function (masculineDivision) {
		SeikyoResource.updateMasculineDivision({seikyo: $scope.seikyo._id, masculineDivision: masculineDivision._id}, masculineDivision, function (masculineDivision) {
		}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error al modificar');
		})
	}

	//MESSAGE
	$scope.addMessage = function () {
		$scope.message = {}
		Modal.regularForm.render({
		    label: 'Name'
		}).on('accept', function (value) {
			$scope.message.name = value
			$scope.message.seikyo = $scope.seikyo._id
			SeikyoResource.addMessage({seikyo: $scope.seikyo._id}, $scope.message, function (message) {
				$scope.message._id = message._id
				seikyo.message.push($scope.message)
				toaster.pop('success', '', 'Message Added');
			}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error');
			})
		})
	}
	$scope.deleteMessage = function (index, message) {
		var index = {
			index: index
		};
		SeikyoResource.deleteMessage({seikyo: $scope.seikyo._id, message: message._id}, index, function () {
			$scope.seikyo.message.splice(index, 1);
			seikyo.message.splice(index, 1);
			toaster.pop('warning', '', 'Message Removed');
		}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error');
		})
	}
	$scope.updateMessage = function (message) {
		SeikyoResource.updateMessage({seikyo: $scope.seikyo._id, message: message._id}, message, function (message) {
		}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error al modificar');
		})
	}

	//MONTHLYPHRASE
	$scope.addMonthlyPhrase = function () {
		$scope.monthlyPhrase = {}
		Modal.regularForm.render({
		    label: 'Name'
		}).on('accept', function (value) {
			$scope.monthlyPhrase.name = value
			$scope.monthlyPhrase.seikyo = $scope.seikyo._id
			SeikyoResource.addMonthlyPhrase({seikyo: $scope.seikyo._id}, $scope.monthlyPhrase, function (monthlyPhrase) {
				$scope.monthlyPhrase._id = monthlyPhrase._id
				seikyo.monthlyPhrase.push($scope.monthlyPhrase)
				toaster.pop('success', '', 'Monthly Phrase Added');
			}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error');
			})
		})
	}
	$scope.deleteMonthlyPhrase = function (index, monthlyPhrase) {
		var index = {
			index: index
		};
		SeikyoResource.deleteMonthlyPhrase({seikyo: $scope.seikyo._id, monthlyPhrase: monthlyPhrase._id}, index, function () {
			$scope.seikyo.monthlyPhrase.splice(index, 1);
			seikyo.monthlyPhrase.splice(index, 1);
			toaster.pop('warning', '', 'MonthlyPhrase Removed');
		}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error');
		})
	}
	$scope.updateMonthlyPhrase = function (monthlyPhrase) {
		SeikyoResource.updateMonthlyPhrase({seikyo: $scope.seikyo._id, monthlyPhrase: monthlyPhrase._id}, monthlyPhrase, function (monthlyPhrase) {
		}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error al modificar');
		})
	}

	//ORIENTATION
	$scope.addOrientation = function () {
		$scope.orientation = {}
		Modal.regularForm.render({
		    label: 'Name'
		}).on('accept', function (value) {
			$scope.orientation.name = value
			$scope.orientation.seikyo = $scope.seikyo._id
			SeikyoResource.addOrientation({seikyo: $scope.seikyo._id}, $scope.orientation, function (orientation) {
				$scope.orientation._id = orientation._id
				seikyo.orientation.push($scope.orientation)
				toaster.pop('success', '', 'Orientation Added');
			}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error');
			})
		})
	}
	$scope.deleteOrientation = function (index, orientation) {
		var index = {
			index: index
		};
		SeikyoResource.deleteOrientation({seikyo: $scope.seikyo._id, orientation: orientation._id}, index, function () {
			$scope.seikyo.orientation.splice(index, 1);
			seikyo.orientation.splice(index, 1);
			toaster.pop('warning', '', 'Orientation Removed');
		}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error');
		})
	}
	$scope.updateOrientation = function (orientation) {
		SeikyoResource.updateOrientation({seikyo: $scope.seikyo._id, orientation: orientation._id}, orientation, function (orientation) {
		}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error al modificar');
		})
	}

	//REVIEW
	$scope.addReview = function () {
		$scope.review = {}
		Modal.regularForm.render({
		    label: 'Name'
		}).on('accept', function (value) {
			$scope.review.name = value
			$scope.review.seikyo = $scope.seikyo._id
			SeikyoResource.addReview({seikyo: $scope.seikyo._id}, $scope.review, function (review) {
				$scope.review._id = review._id
				seikyo.review.push($scope.review)
				toaster.pop('success', '', 'Review Added');
			}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error');
			})
		})
	}
	$scope.deleteReview = function (index, review) {
		var index = {
			index: index
		};
		SeikyoResource.deleteReview({seikyo: $scope.seikyo._id, review: review._id}, index, function () {
			$scope.seikyo.review.splice(index, 1);
			seikyo.review.splice(index, 1);
			toaster.pop('warning', '', 'Review Removed');
		}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error');
		})
	}
	$scope.updateReview = function (review) {
		SeikyoResource.updateReview({seikyo: $scope.seikyo._id, review: review._id}, review, function (review) {
		}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error al modificar');
		})
	}

	//SOKAADVANCE
	$scope.addSokaAdvance = function () {
		$scope.sokaAdvance = {}
		Modal.regularForm.render({
		    label: 'Name'
		}).on('accept', function (value) {
			$scope.sokaAdvance.name = value
			$scope.sokaAdvance.seikyo = $scope.seikyo._id
			SeikyoResource.addSokaAdvance({seikyo: $scope.seikyo._id}, $scope.sokaAdvance, function (sokaAdvance) {
				$scope.sokaAdvance._id = sokaAdvance._id
				seikyo.sokaAdvance.push($scope.sokaAdvance)
				toaster.pop('success', '', 'Soka Advance Added');
			}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error');
			})
		})
	}
	$scope.deleteSokaAdvance = function (index, sokaAdvance) {
		var index = {
			index: index
		};
		SeikyoResource.deleteSokaAdvance({seikyo: $scope.seikyo._id, sokaAdvance: sokaAdvance._id}, index, function () {
			$scope.seikyo.sokaAdvance.splice(index, 1);
			seikyo.sokaAdvance.splice(index, 1);
			toaster.pop('warning', '', 'SokaAdvance Removed');
		}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error');
		})
	}
	$scope.updateSokaAdvance = function (sokaAdvance) {
		SeikyoResource.updateSokaAdvance({seikyo: $scope.seikyo._id, sokaAdvance: sokaAdvance._id}, sokaAdvance, function (sokaAdvance) {
		}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error al modificar');
		})
	}

	//STUDENTGROUP
	$scope.addStudentGroup = function () {
		$scope.studentGroup = {}
		Modal.regularForm.render({
		    label: 'Name'
		}).on('accept', function (value) {
			$scope.studentGroup.name = value
			$scope.studentGroup.seikyo = $scope.seikyo._id
			SeikyoResource.addStudentGroup({seikyo: $scope.seikyo._id}, $scope.studentGroup, function (studentGroup) {
				$scope.studentGroup._id = studentGroup._id
				seikyo.studentGroup.push($scope.studentGroup)
				toaster.pop('success', '', 'Student Group Added');
			}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error');
			})
		})
	}
	$scope.deleteStudentGroup = function (index, studentGroup) {
		var index = {
			index: index
		};
		SeikyoResource.deleteStudentGroup({seikyo: $scope.seikyo._id, studentGroup: studentGroup._id}, index, function () {
			$scope.seikyo.studentGroup.splice(index, 1);
			seikyo.studentGroup.splice(index, 1);
			toaster.pop('warning', '', 'StudentGroup Removed');
		}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error');
		})
	}
	$scope.updateStudentGroup = function (studentGroup) {
		SeikyoResource.updateStudentGroup({seikyo: $scope.seikyo._id, studentGroup: studentGroup._id}, studentGroup, function (studentGroup) {
		}, function (err) {
				toaster.pop('error', '', 'Ocurrio un error al modificar');
		})
	}
});
